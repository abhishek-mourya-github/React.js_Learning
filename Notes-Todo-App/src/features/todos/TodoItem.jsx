import React, { useState } from 'react';
import { useTodos } from '../../contexts/TodosContext';
import ConfirmModal from '../../components/ConfirmModal';

export default function TodoItem({ todo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const { updateTodo, deleteTodo, toggleComplete } = useTodos();

    const handleEdit = () => {
        if (isEditing) {
            updateTodo(todo.id, { todo: todoMsg });
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    };

    const handleCancel = () => {
        setTodoMsg(todo.todo);
        setIsEditing(false);
    };

    const handleToggleComplete = () => {
        toggleComplete(todo.id);
    };

    const handleDelete = () => {
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        deleteTodo(todo.id);
        setShowDeleteModal(false);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className={`flex items-center border border-gray-200 rounded-lg px-4 py-3 gap-x-3 shadow-sm transition-all duration-200 ${
            todo.completed ? "bg-green-50 border-green-200" : "bg-white hover:shadow-md"
        }`}>
            <input
                type="checkbox"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2 cursor-pointer"
                checked={todo.completed}
                onChange={handleToggleComplete}
            />
            
            <div className="flex-1 min-w-0">
                {isEditing ? (
                    <input
                        type="text"
                        value={todoMsg}
                        onChange={(e) => setTodoMsg(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        autoFocus
                    />
                ) : (
                    <p className={`text-gray-800 ${todo.completed ? "line-through text-gray-500" : ""}`}>
                        {todo.todo}
                    </p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                    {formatDate(todo.createdAt)}
                </p>
            </div>

            <div className="flex space-x-2">
                <button
                    onClick={handleEdit}
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-gray-200 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                    disabled={todo.completed && !isEditing}
                    title={isEditing ? "Save" : "Edit"}
                >
                    {isEditing ? "✓" : "✏️"}
                </button>
                
                {isEditing && (
                    <button
                        onClick={handleCancel}
                        className="inline-flex w-8 h-8 rounded-lg text-sm border border-gray-200 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                        title="Cancel"
                    >
                        ✕
                    </button>
                )}
                
                <button
                    onClick={handleDelete}
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-gray-200 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                    title="Delete"
                >
                    🗑️
                </button>
            </div>
            
            <ConfirmModal
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={confirmDelete}
                title="Delete Task"
                message="Are you sure you want to delete this task? This action cannot be undone."
                confirmText="Delete"
                cancelText="Cancel"
            />
        </div>
    );
}

