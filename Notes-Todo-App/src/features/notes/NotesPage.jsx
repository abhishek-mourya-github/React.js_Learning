import React from "react";
import NotesForm from "./NotesForm";
import NotesList from "./NotesList";

export default function NotesPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Notes</h1>
        <p className="text-gray-600">Capture your thoughts and ideas</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <NotesForm />
        </div>
        <div className="lg:col-span-2">
          <NotesList />
        </div>
      </div>
    </div>
  );
}