import React from 'react';
import { FaBookReader } from "react-icons/fa";
import { Link } from 'react-router-dom';
import GooeyNav from '../ReactBits/NavStyle';

function NavBar() {
  // const items = [
  //   { label: "Home", href: "/" },
  //   { label: "About", href: "/about" },
  //   { label: "Contact", href: "/contact" },
  // ];

  return (
    <div>
      <header className="bg-[#202124] text-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl flex items-center gap-2 font-bold">
            <FaBookReader /> VirtualStudy
          </h1>

          {/* Nav Links */}
          {/* <nav className="hidden md:flex items-center gap-8">
            <GooeyNav
              items={items}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </nav> */}
          <div className='flex gap-3 text-lg'>
            <Link className='px-3 py-[0.5vw] rounded-md text-black bg-white '  to='/'>Home</Link>
            <Link className='px-3 py-[0.5vw] rounded-md' to='/about'>About</Link>
            <Link className='px-3 py-[0.5vw] rounded-md' to='/contact'>Contact</Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="bg-zinc-900 text-white flex items-center gap-2 text-xl px-5 py-2 rounded-lg hover:bg-gray-800 transition duration-300 shadow-md"
            >
              Login
            </Link>
            <Link
              to="/singup"
              className="bg-zinc-900 text-white flex items-center gap-2 text-xl px-5 py-2 rounded-lg hover:bg-gray-800 transition duration-300 shadow-md"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
