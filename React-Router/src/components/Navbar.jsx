import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[10vh] flex justify-between items-center py-5 px-10 bg-white/70 text-black">
      <h2 className="font-bold text-2xl">Logo</h2>
      <div className="flex gap-8">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
        <Link to='/course'>Course</Link>
      </div>
    </div>
  );
};

export default Navbar;