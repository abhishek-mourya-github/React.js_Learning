import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeContextData } from '../context/ThemeContext'

const About = () => {
  const { theme } = useContext(ThemeContextData);
  const navigate = useNavigate()

  const buttonClicked = () => {
    navigate('/')
  }

  return (
    <div className={`h-[90vh] w-screen text-3xl flex items-center justify-center flex-col gap-5 ${theme === 'light' ? 'bg-gray-300 text-black' : 'bg-black text-white'}`}>
      <button className={`cursor-pointer border py-2 px-4 rounded-xl ${theme === 'light' ? 'border-black' : 'border-white'}`}
      onClick={buttonClicked}>
        Return to Home Page
        </button>
      <h1>Hello About Page</h1>
    </div>
  )
}

export default About