import React, { useState } from 'react';
import { useNotes } from '../../contexts/NotesContext';

export default function NotesForm() {
    const [note, setNote] = useState('');
    const { addNote } = useNotes();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (note.trim()) {
            addNote(note.trim());
            setNote('');
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Note</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Write your note here..."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        rows={6}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                    Add Note
                </button>
            </form>
        </div>
    );
}


