import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate()

  const buttonClicked = () => {
    navigate('/')
  }

  return (
    <div className='h-[90vh] bg-black w-screen text-white text-3xl flex items-center justify-center flex-col gap-5'>
      <button className='cursor-pointer border py-2 px-4 rounded-xl'
      onClick={buttonClicked}>
        Return to Home Page
        </button>
      <h1>Hello About Page</h1>
    </div>
  )
}

export default About