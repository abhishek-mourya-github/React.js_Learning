import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Toggle from "./Toggle";
import { ThemeContextData } from "../context/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContextData);

  return (
    <div className={`h-[10vh] flex justify-between items-center py-5 px-10 ${theme === 'light' ? 'bg-gray-300 text-black border-b-2' : 'bg-gray-800/70 text-white'}`}>
      <h2 className="font-bold text-2xl">Logo</h2>
      <div className="flex gap-8">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
        <Link to='/course'>Course</Link>
        <Toggle />
      </div>
    </div>
  );
};

export default Navbar;