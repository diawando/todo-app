import React, { createContext, useState, useContext } from 'react';

// Création du contexte
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
      const [todos, setTodos] = useState([]);

      // Récuperer les todos depuis localStorage au montage
      React.useEffect(() => {
            const storedTodos = localStorage.getItem("todos");
            if (storedTodos) {
                  setTodos(JSON.parse(storedTodos));
            }
      }, []);

      // Mettre à jour localStorage lorsque les todos changent
      React.useEffect(() => {
           localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos]);

      // Ajouter un nouveau todo
      const addTodo = (title) => {
         const newTodo = {
             id: self.crypto.randomUUID(),
             title,
             is_completed: false,
         };
         setTodos((prevTodos) => [...prevTodos, newTodo]);
      };

      // Supprimer un todo
      const deleteTodo = (id) =>{
          setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      };

      // Editer un todo
      const editTodo = (id, newTitle) => {
         setTodos((prevTodos) => 
            prevTodos.map((todo) =>
                 todo.id === id ? { ...todo, title: newTitle } : todo
            )
        );
      };

      // Marquer un todo comme terminé ou non terminé
      const toggleComplete = (id) => {
          setTodos((prevTodos) => 
             prevTodos.map((todo) => 
               todo.id === id 
                   ? { ...todo, is_completed: !todo.is_completed}  
                   : todo
            )
         );
      };

      // Valeur du contexte
      const value = {
          todos, 
          addTodo,
          deleteTodo,
          editTodo,
          toggleComplete,
      };

      return (
           <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
      );
};

export const useTodoContext = () => useContext(TodoContext);
