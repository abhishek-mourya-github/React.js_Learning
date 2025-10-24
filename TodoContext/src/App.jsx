import React, { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import ToDoForm from "./components/ToDoForm";
import ToDoItem from "./components/ToDoItem";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    setTodoList((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updatedTodo = (id, todo) => {
    setTodoList((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodoList((prev) =>
      prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo )
    );
  };

  // Load todos from localStorage on first render
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length > 0) {
      setTodoList(storedTodos);
    }
  }, []);

  // Save todos to localStorage whenever todoList changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoProvider value={{todos: todoList, addTodo, updatedTodo, deleteTodo, toggleComplete}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ToDoForm />
          </div>
          <div className="w-full max-w-sm mx-auto">
            {todoList.map((todo) => (
              <div key={todo.id} className="w-full">
                <ToDoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;