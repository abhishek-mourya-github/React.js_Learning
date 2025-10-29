import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoPage() {
  return (
    <div className="mx-auto h-[70vh] w-full max-w-7xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My To-Do List</h1>
        <p className="text-gray-600">Stay organized and get things done</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <TodoForm />
        </div>
        <div className="lg:col-span-2">
          <TodoList />
        </div>
      </div>
    </div>
  );
}


