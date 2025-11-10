import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ThemeContextData } from '../context/ThemeContext'

const Product = () => {
  const { theme } = useContext(ThemeContextData);

  return (
 <div className={`h-[90vh] ${theme === 'light' ? 'bg-gray-300 text-black' : 'bg-black text-white'}`}> 
      <div className='h-[5vh] flex justify-center items-center gap-20'>
        <Link to='/product/men'>Men</Link>
        <Link to='/product/women'>Women</Link>
      </div>
      <div className='h-[85vh] flex items-center justify-center'>
        <h2 className=''>Product List</h2>
      </div>
 </div>
  )
}

export default Product