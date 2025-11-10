import React, { useContext } from 'react'
import { ThemeContextData } from '../context/ThemeContext'

const NotFound = () => {
  const { theme } = useContext(ThemeContextData);

  return (
    <div className={`h-[90vh] w-screen text-3xl flex items-center justify-center ${theme === 'light' ? 'bg-gray-300 text-black' : 'bg-black text-white'}`}>
      <h2 >404 | Page Not Found</h2>
    </div>
  )
}

export default NotFound