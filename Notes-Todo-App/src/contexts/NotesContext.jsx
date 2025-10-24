import { useContext, createContext, useState, useEffect } from "react";

export const NotesContext = createContext({
    notes: [],
    addNote: () => {},
    updateNote: () => {},
    deleteNote: () => {}
});

export const useNotes = () => {
    return useContext(NotesContext); 
}

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load notes from localStorage on component mount
    useEffect(() => {
        const savedNotes = localStorage.getItem('notes');
        console.log('Loading notes from localStorage:', savedNotes);
        if (savedNotes) {
            try {
                const parsedNotes = JSON.parse(savedNotes);
                console.log('Parsed notes:', parsedNotes);
                setNotes(parsedNotes);
            } catch (error) {
                console.error('Error parsing saved notes:', error);
            }
        }
        setIsLoaded(true);
    }, []);

    // Save notes to localStorage whenever notes change (but only after initial load)
    useEffect(() => {
        if (isLoaded) {
            console.log('Saving notes to localStorage:', notes);
            localStorage.setItem('notes', JSON.stringify(notes));
        }
    }, [notes, isLoaded]);

    const addNote = (note) => {
        const newNote = {
            id: Date.now(),
            note: note,
            createdAt: new Date().toISOString()
        };
        setNotes(prevNotes => [...prevNotes, newNote]);
    };

    const updateNote = (id, updatedNote) => {
        setNotes(prevNotes => 
            prevNotes.map(note => 
                note.id === id ? { ...note, ...updatedNote } : note
            )
        );
    };

    const deleteNote = (id) => {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    };

    const value = {
        notes,
        addNote,
        updateNote,
        deleteNote
    };

    return (
        <NotesContext.Provider value={value}>
            {children}
        </NotesContext.Provider>
    );
};