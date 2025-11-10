import React, { useContext } from 'react'
import { ToggleLeft } from 'lucide-react';
import { ToggleRight } from 'lucide-react';
import { ThemeContextData } from '../context/ThemeContext';

const Toggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContextData);

    return (
        <div onClick={toggleTheme} className='cursor-pointer'>
            {theme === 'light' ? (
                <ToggleLeft size={26} color='black'/>
            ) : (
                <ToggleRight size={26} color='white'/>
            )}
        </div>
    )
}

export default Toggle