"use client";
import React from "react";
import { useTodoContext } from "@/Provider/TodoContext";


function Form( {setTodos, todos }){
    const { addTodo } = useTodoContext();
    
    const handleSubmit = (event) => {
         event.preventDefault();
         const value = event.target.todo.value;
         addTodo(value); // Utilise la fonction addTodo du contexte
         event.target.reset();
    }

     return (
        <form className="form" onSubmit={handleSubmit} >
            <label htmlFor="todo">
                <input
                   type="text"
                   name="todo"
                   id="todo"
                   placeholder="Write your next task"
                />
            </label>
            <button >
                <span className="visually-hidden">Submit</span>
                <svg>
                    <path d="" />
                </svg>
            </button>
        </form>
     );
}

export default Form;


