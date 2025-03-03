import React from "react";
import { useTodoContext } from "@/Provider/TodoContext";

function TODOHero(){
    const { todos } = useTodoContext();
    const todos_completed = todos.filter((todo) => todo.is_completed).length;
    const total_todos = todos.length 
    return(
        <section className="todohero_section">
              <div>
                  <p>Task Done</p>
                  <p>Keep it up</p>
              </div>
              <div>
                  {todos_completed}/{total_todos}
              </div>
        </section>
    )
}


export default TODOHero;