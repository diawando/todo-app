import React, { createContext, useState, useContext } from 'react';

// Création du contexte
const TodoContext = createContext();

// Hook personnalisé pour utiliser le contexte
export function useTodoContext(){
     return useContext(TodoContext);
}
