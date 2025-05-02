import React from 'react';
import { FaUsers, FaBook, FaComments, FaChartLine } from 'react-icons/fa';
import { FaBookReader } from "react-icons/fa";
import Dropdown from './partials/Dropdown';
import { Link } from 'react-router-dom';
import NavBar from './partials/NavBar';


const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <NavBar />

      {/* Hero Section */}
      <section className="text-black bg-[url('')] bg-cover bg-center bg-no-repeat shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl mt-18 font-bold mb-6 drop-shadow-lg">
              Connect, Learn, and Grow Together
            </h1>
            <p className="text-xl mb-8 drop-shadow-lg">
              Join virtual study groups based on your subjects and interests
            </p>
            <Link to="/chatbot" className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
              Ask With AI
            </Link>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose StudyGroup?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-300 ease-in-out">
              <div className="animate-bounce">
                <FaUsers className="text-indigo-600 text-4xl mb-4" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect with Peers</h3>
              <p className="text-gray-600 text-xl">Find and join study groups with like-minded students</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-300 ease-in-out">
              <div className="animate-bounce delay-100">
                <FaBook className="text-indigo-600 text-4xl mb-4" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Subject Focused</h3>
              <p className="text-gray-600 text-xl">Groups organized by specific subjects and topics</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-300 ease-in-out">
              <div className="animate-bounce delay-200">
                <FaComments className="text-indigo-600 text-4xl mb-4" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
              <p className="text-gray-600 text-xl">Engage in discussions and collaborative learning</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-300 ease-in-out">
              <div className="animate-bounce delay-300">
                <FaChartLine className="text-indigo-600 text-4xl mb-4" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-600 text-xl">Monitor your learning journey and achievements</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-gray-600 text-xl">Create your account in seconds</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Groups</h3>
              <p className="text-gray-600 text-xl">Browse or search for study groups</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Learning</h3>
              <p className="text-gray-600 text-xl">Join groups and begin your learning journey</p>
            </div>
          </div>
        </div>
      </section>

    {/* dropdown Section */}
      <Dropdown />

      {/* Footer */}
      <footer className="text-white bg-[#2B2B2B]  py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex gap-2"><FaBookReader />VirtualStudy</h3>
              <p className="text-gray-400 text-xl">Your virtual learning companion</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-xl">
                <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div className='text-xl'>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400">Email: support@studygroup.com</p>
              <p className="text-gray-400">Phone: 329057329843290</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p className='text-xl'>&copy; 2024 StudyGroup. All rights reserved.</p>
          </div>
        </div>
      </footer>
   
    </div>
  );
};

export default LandingPage;

