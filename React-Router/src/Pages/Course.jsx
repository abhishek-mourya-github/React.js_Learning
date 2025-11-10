import React, { useContext } from 'react'
import { ThemeContextData } from '../context/ThemeContext'

const Course = () => {
  const { theme } = useContext(ThemeContextData);

  return (
    <div className={`h-[90vh] w-screen text-3xl flex items-center justify-center ${theme === 'light' ? 'bg-gray-300 text-black' : 'bg-black text-white'}`}>
      <h2 >Courses</h2>
    </div>
  )
}

export default Course