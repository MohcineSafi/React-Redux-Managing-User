// Importation du fichier CSS pour styliser le composant Users
import './App.css';

// Importation des hooks useSelector et useDispatch de react-redux
import { useSelector, useDispatch } from 'react-redux';

// Importation des actions deleteUser et updateNom depuis le fichier Users.js
import { deleteUser, updateNom } from './features/Users';

// Importation du hook useState et useRef de React
import { useState, useRef } from 'react';

// Définition du composant Users
export default function Users() {
  // Sélection de la liste d'utilisateurs à partir du state global à l'aide du hook useSelector
  const userList = useSelector((state) => state.users.value);

  // Obtention de la fonction dispatch à l'aide du hook useDispatch
  const dispatch = useDispatch();

  // État local pour stocker le nouveau nom lors de la mise à jour
  const [nom, setNom] = useState('');

  // Rendu du composant Users
  return (
 
      <div className='displayUsers'>
        {/* Boucle sur la liste d'utilisateurs et affichage de chaque utilisateur */}
        {userList.map((user, index) => {
          return (
            <div key={index}>
              {/* Affichage du nom et du prénom de l'utilisateur */}
              <h1>{user.nom} {user.prenom}</h1>

              {/* Champ de saisie pour le nouveau nom avec gestion de l'événement onChange */}
              <input onChange={(event) => setNom(event.target.value)} />

              {/* Bouton pour mettre à jour le nom de l'utilisateur */}
              <button onClick={() => dispatch(updateNom({ id: user.id, nom: nom }))}>
                Update UserName
              </button>

              {/* Bouton pour supprimer l'utilisateur */}
              <button onClick={() => dispatch(deleteUser({ id: user.id }))}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    
  );
}
