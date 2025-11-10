import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ThemeContextData } from '../context/ThemeContext'

const CourseDetails = () => {
  const { theme } = useContext(ThemeContextData);
  const {id} = useParams()

  const formattedId = id.charAt(0).toUpperCase() + id.slice(1);

  return (
    <div className={`h-[90vh] w-screen text-3xl flex items-center justify-center ${theme === 'light' ? 'bg-gray-300 text-black' : 'bg-black text-white'}`}>
      <h2 >{formattedId} Course Details</h2>
    </div>
  )
}

export default CourseDetails