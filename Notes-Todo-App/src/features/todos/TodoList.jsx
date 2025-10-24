import React from 'react';
import { useTodos } from '../../contexts/TodosContext';
import TodoItem from './TodoItem';

export default function TodoList() {
    const { todos } = useTodos();

    const completedTodos = todos.filter(todo => todo.completed);
    const pendingTodos = todos.filter(todo => !todo.completed);

    if (todos.length === 0) {
        return (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="text-gray-400 mb-4">
                    <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks yet</h3>
                <p className="text-gray-500">Start by adding your first task using the form on the left.</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Your Tasks</h2>
                <div className="flex space-x-4 text-sm text-gray-600">
                    <span>Total: {todos.length}</span>
                    <span>Pending: {pendingTodos.length}</span>
                    <span>Completed: {completedTodos.length}</span>
                </div>
            </div>

            {pendingTodos.length > 0 && (
                <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-700 mb-3">Pending Tasks</h3>
                    <div className="space-y-3">
                        {pendingTodos.map(todo => (
                            <TodoItem key={todo.id} todo={todo} />
                        ))}
                    </div>
                </div>
            )}

            {completedTodos.length > 0 && (
                <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-3">Completed Tasks</h3>
                    <div className="space-y-3">
                        {completedTodos.map(todo => (
                            <TodoItem key={todo.id} todo={todo} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

