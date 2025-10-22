import React, { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import ToDoForm from "./components/ToDoForm";
import ToDoItem from "./components/ToDoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updatedTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
     setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
      const todos = JSON.parse(localStorage.getItem("todos"));
      if(todos && todos.length > 0){
        setTodos(todos)
      }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  return (
    <TodoProvider value={{todos, addTodo, updatedTodo, deleteTodo, toggleComplete}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ToDoForm />
          </div>
          <div className="w-full max-w-sm mx-auto">
            {todos.map((todo) => (
              <div key={todo.id}  className='w-full'>
                 <ToDoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;