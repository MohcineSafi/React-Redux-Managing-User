// Importation de la fonction createSlice depuis Redux Toolkit et de usersData depuis un fichier local
import { createSlice } from '@reduxjs/toolkit';
import { usersData } from './usersData';

// Création de la slice 'users' avec createSlice
export const userSlice = createSlice({
  // Nom de la slice
  name: "users",
  // État initial de la slice, avec value initialisé à usersData
  initialState: { value: usersData },
  // Reducers décrivant comment l'état doit changer en réponse à certaines actions
  reducers: {
    // Reducer pour ajouter un utilisateur à la liste
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    // Reducer pour supprimer un utilisateur de la liste en filtrant par ID
    deleteUser: (state, action) => {
      state.value = state.value.filter(user => user.id !== action.payload.id);
    },
    // Reducer pour mettre à jour le nom d'un utilisateur en recherchant par ID
    updateNom: (state, action) => {
      state.value = state.value.map(user => {
        if (user.id === action.payload.id) {
          // Si l'ID correspond, retourne un nouvel objet avec le nom mis à jour
          return { ...user, nom: action.payload.nom };
        } else {
          // Sinon, retourne l'utilisateur inchangé
          return user;
        }
      });
    },
  },
});

// Exportation des actions générées par createSlice
export const { addUser, deleteUser, updateNom } = userSlice.actions;
// Exportation du réducteur généré par createSlice
export default userSlice.reducer;
