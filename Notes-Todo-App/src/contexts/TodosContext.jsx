import { useContext, createContext, useState, useEffect } from "react";

export const TodosContext = createContext({
    todos: [],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleComplete: () => {}
});

export const useTodos = () => {
    return useContext(TodosContext); 
}

export const TodosProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load todos from localStorage on component mount
    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        console.log('Loading todos from localStorage:', savedTodos);
        if (savedTodos) {
            try {
                const parsedTodos = JSON.parse(savedTodos);
                console.log('Parsed todos:', parsedTodos);
                setTodos(parsedTodos);
            } catch (error) {
                console.error('Error parsing saved todos:', error);
            }
        }
        setIsLoaded(true);
    }, []);

    // Save todos to localStorage whenever todos change (but only after initial load)
    useEffect(() => {
        if (isLoaded) {
            console.log('Saving todos to localStorage:', todos);
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos, isLoaded]);

    const addTodo = (todo) => {
        const newTodo = {
            id: Date.now(),
            todo: todo,
            completed: false,
            createdAt: new Date().toISOString()
        };
        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    const updateTodo = (id, updatedTodo) => {
        setTodos(prevTodos => 
            prevTodos.map(todo => 
                todo.id === id ? { ...todo, ...updatedTodo } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos(prevTodos => 
            prevTodos.map(todo => 
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const value = {
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete
    };

    return (
        <TodosContext.Provider value={value}>
            {children}
        </TodosContext.Provider>
    );
};

