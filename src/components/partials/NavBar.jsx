import React from 'react'
import { FaBookReader } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';    

function NavBar() {
  return (
    <div>
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl flex items-center gap-2 font-bold text-indigo-600">
            <FaBookReader />VirtualStudy
          </h1>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 text-xl">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-indigo-600 text-xl">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-indigo-600 text-xl">Contact Us</Link>
          </nav>

          <div className='flex items-center gap-4'>
            <Link to='/login' className="bg-[#B3B3B3] flex justify-center items-center gap-2 bg-text-xl text-xl text-black px-3 py-2 rounded-lg hover:bg-[#B3B3B3] transition duration-300">
              Login
            </Link>
            <Link to='/singup' className="bg-[#B3B3B3] flex justify-center items-center gap-2 bg-text-xl text-xl text-black px-3 py-2 rounded-lg hover:bg-[#B3B3B3] transition duration-300">
              Sign Up
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default NavBar
