import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';


function ThemeButton(){

    const {setTheme, theme} = useContext(ThemeContext)

    return(
        <>
          <button onClick={() => setTheme(theme === "light" ? "dark" : "light" )} className='cursor-pointer bg-amber-100 border-2 border-black py-1 px-2'>Theme</button>
        </>
    )
}

export default ThemeButton;