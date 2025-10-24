import React from 'react';
import { useNotes } from '../../contexts/NotesContext';
import NoteItem from './NoteItem';

export default function NotesList() {
    const { notes } = useNotes();

    if (notes.length === 0) {
        return (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="text-gray-400 mb-4">
                    <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No notes yet</h3>
                <p className="text-gray-500">Start by adding your first note using the form on the left.</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Notes ({notes.length})</h2>
            <div className="space-y-4">
                {notes.map(note => (
                    <NoteItem key={note.id} note={note} />
                ))}
            </div>
        </div>
    );
}

