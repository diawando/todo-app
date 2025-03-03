"use client";
import React from "react";
import { useTodoContext } from "@/Provider/TodoContext";


function Item({ item, setTodos, todos }) {
    const { deleteTodo, editTodo, toggleComplete } = useTodoContext();
    const [editing, setEditing] = React.useState(false);
    const inputRef = React.useRef(null);
    
    const handleEdit = (newTitle) => {
         editTodo(item.id, newTitle); // Utilise la fonction editTodo du contexte
         setEditing(false);
    };

    const handleDelete = () => {
         deleteTodo(item.id); // Utilise la fonction deleteTodo du contexte
    };

    const handleComplete = () => {
         toggleComplete(item.id); // Utilise la fonction toggleComplete du contexte
    }

    const handleInputSubmit = (event) => {
         event.preventDefault();
         const newTitle = event.target["edit-todo"].value;
         handleEdit(newTitle);
    };

    const handleInputBlur = (event) => {
         const newTitle = event.target.value;
         handleEdit(newTitle);
    }

    React.useEffect(() => {
          if (editing && inputRef.current) {
              inputRef.current.focus();
          }
    }, [editing]);
 
    return (
        <li id={item?.id} className="todo_item" >

            {editing ? (
                <form className="edit-form" onSubmit={handleInputSubmit}>
                     <label htmlFor="edit-todo">
                        <input 
                          ref={inputRef}
                          type="text"
                          name="edit-todo"
                          id="edit-todo"
                          defaultValue={item?.title}
                          onBlur={handleInputBlur}
                          onChange={handleInputChange}
                        />
                     </label>
                </form>) : (
                    <>
                        <button className="todo_items_left" onClick={handleComplete}>
                 <svg fill={item.is_completed ? "#22C55E" : "#0d0d0d"}>
                      <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
                 </svg>
                 <p style={
                    item.is_completed
                     ? { textDecoration: "line-through"} 
                     : {}
                 }>
                    {item?.title}
                 </p>
             </button>
             <div className="todo_items_right">
                 <button onClick={() => setEditing(true)}>
                     <span className="visually-hidden">Edit</span>
                     <svg>
                        <path d="" />
                     </svg>
                 </button>
                 <button onClick={handleDelete}>
                    <span className="visually-hidden">Delete</span>
                    <svg>
                        <path d="" />
                    </svg>
                 </button>
             </div>
                    </>
                )}
             
        </li>
    );
}

export default Item;