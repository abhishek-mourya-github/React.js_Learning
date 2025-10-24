import { useContext, createContext } from "react";

export const TodoContext = createContext({
   // ye bas ye tarah ka blueprint he batayega ki context me kya kya values milengi.
    todos: [
        {
            id: 1,
            todo: "Todo message",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


// kahi par useContext(TodoContext) likhne se acha he bas useTodo() likh taki easy rahe sab.
export const useTodo = () => {
    return useContext(TodoContext); 
}

export const TodoProvider = TodoContext.Provider;