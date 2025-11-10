import React, { useContext } from 'react'
import { ThemeContextData } from '../context/ThemeContext'

const ProductMen = () => {
  const { theme } = useContext(ThemeContextData);

  return (
    <div className={`h-[90vh] w-screen text-3xl flex items-center justify-center ${theme === 'light' ? 'bg-gray-300 text-black' : 'bg-black text-white'}`}>
      <h1>Mens Product List</h1>
    </div>
  )
}

export default ProductMen
