import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {

  const {id} = useParams()

  const formattedId = id.charAt(0).toUpperCase() + id.slice(1);

  return (
    <div className='h-[90vh] bg-black w-screen text-white text-3xl flex items-center justify-center'>
      <h2 >{formattedId} Course Details</h2>
    </div>
  )
}

export default CourseDetails