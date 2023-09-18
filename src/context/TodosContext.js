import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[
       
    ],
    deleteTodo: (id)=>{},
    updateTodo: (id,todo) => {},
    toggleComplete: (id) =>{},
    addTodo: (todo) =>{},
});


export const TodoProvider  = TodoContext.Provider

export const useTodo = ()=>{
    return useContext(TodoContext);
}

