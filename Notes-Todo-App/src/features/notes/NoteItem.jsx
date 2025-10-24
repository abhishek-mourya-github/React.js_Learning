import React, { useState } from 'react';
import { useNotes } from '../../contexts/NotesContext';
import ConfirmModal from '../../components/ConfirmModal';

export default function NoteItem({ note }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedNote, setEditedNote] = useState(note.note);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const { updateNote, deleteNote } = useNotes();

    const handleEdit = () => {
        if (isEditing) {
            updateNote(note.id, { note: editedNote });
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    };

    const handleCancel = () => {
        setEditedNote(note.note);
        setIsEditing(false);
    };

    const handleDelete = () => {
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        deleteNote(note.id);
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
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-500">
                    {formatDate(note.createdAt)}
                </span>
                <div className="flex space-x-2">
                    <button
                        onClick={handleEdit}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                        {isEditing ? 'Save' : 'Edit'}
                    </button>
                    {isEditing && (
                        <button
                            onClick={handleCancel}
                            className="text-gray-600 hover:text-gray-800 text-sm font-medium"
                        >
                            Cancel
                        </button>
                    )}
                    <button
                        onClick={handleDelete}
                        className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                        Delete
                    </button>
                </div>
            </div>
            
            {isEditing ? (
                <textarea
                    value={editedNote}
                    onChange={(e) => setEditedNote(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={4}
                />
            ) : (
                <p className="text-gray-800 whitespace-pre-wrap">{note.note}</p>
            )}
            
            <ConfirmModal
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={confirmDelete}
                title="Delete Note"
                message="Are you sure you want to delete this note? This action cannot be undone."
                confirmText="Delete"
                cancelText="Cancel"
            />
        </div>
    );
}