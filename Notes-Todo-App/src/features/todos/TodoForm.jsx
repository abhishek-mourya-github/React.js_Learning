import React, { useState } from 'react';
import { useTodos } from '../../contexts/TodosContext';

export default function TodoForm() {
    const [todo, setTodo] = useState('');
    const { addTodo } = useTodos();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim()) {
            addTodo(todo.trim());
            setTodo('');
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="text"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        placeholder="What needs to be done?"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
}


