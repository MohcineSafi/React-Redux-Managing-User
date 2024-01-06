// Importation des hooks useDispatch et useSelector de react-redux, et useRef de React
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

// Importation de l'action addUser depuis le fichier Users.js
import { addUser } from "./features/Users";

// Importation du composant Users depuis le fichier Users.js
import Users from "./Users";

// Importation du fichier CSS pour styliser l'application
import "./App.css";

// Définition du composant principal App
function App() {
  // Obtention de la fonction dispatch à l'aide du hook useDispatch
  const dispatch = useDispatch();

  // Sélection de la liste d'utilisateurs à partir du state global à l'aide du hook useSelector
  const usersList = useSelector(data => data.users.value);

  // Références pour les champs de saisie nom et prénom
  const nom = useRef('');
  const prenom = useRef('');

  // Fonction pour ajouter un utilisateur
  function ajouter() {
    let id;

    // Vérifier si la liste existe et a au moins un élément
    if (usersList && usersList.length > 0) {
      // Calculer l'ID en ajoutant 1 à l'ID du dernier utilisateur de la liste
      id = usersList[usersList.length - 1].id + 1;
    } else {
      // Si la liste est vide ou n'existe pas, initialiser l'ID à 1
      id = 1;
    }

    // Dispatch de l'action addUser avec les données de l'utilisateur à ajouter
    dispatch(addUser({ id: id, nom: nom.current.value, prenom: prenom.current.value }));

    // Effacer les champs de saisie après l'ajout
    nom.current.value = "";
    prenom.current.value = "";
  }

  // Rendu du composant App
  return (
    <div className="App">
      <div className='section'>
        {/* Champs de saisie pour le nom et le prénom */}
        <input type="text" placeholder="Name" ref={nom} />
        <input type="text" placeholder="FirstName" ref={prenom} />
        {/* Bouton pour déclencher la fonction d'ajout d'utilisateur */}
        <button onClick={() => { ajouter() }}>Add</button>
      </div>

      {/* Affichage du composant Users */}
      <Users />

    </div>
  );
}

// Exportation du composant App
export default App;
