import React from "react";
import Item from "./Item";
import { useTodoContext } from "@/Provider/TodoContext";

function TODOList(){
     const { todos, setTodos } = useTodoContext();
     return (
     <ol className="todo_list">
        {todos && todos.length > 0 ? (
            todos?.map((item, index) => (
            <Item key={index} item={item} todos={todos} setTodos={setTodos}/>))
        ) : (
            <p>Seems lonely in here, what are you up to?</p>
        )}
        </ol>
    );
}

export default TODOList;