"use client";

function Form( {setTodos, todos }){
     const handleSubmit = (event) =>{
         event.preventDefault();
         const value = event.target.todo.value;
         const newTodo = {
             title: value,
             id: self.crypto.randomUUId,
             is_completed:false,
         };

         setTodos((prevTodos) => [...prevTodos,newTodo]);
         // Store updated todo lis in local storage
         const updatedTodoList = JSON.stringify([...todos, newTodo]);
         localStorage.setItem("todos", updatedTodoList);
         // reset the form
         event.target.reset();
     };

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


