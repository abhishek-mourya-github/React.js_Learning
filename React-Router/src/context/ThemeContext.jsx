import React, { createContext, useState, useEffect } from 'react'

export const ThemeContextData = createContext();

const ThemeContext = ({ children }) => {
    // Initialize theme from localStorage or default to 'light'
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light';
    });

    // Save theme to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContextData.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContextData.Provider>
    )
}

export default ThemeContext
