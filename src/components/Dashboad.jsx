import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBrain, FaVideo, FaPlus, FaBook, FaRobot, FaBookReader } from "react-icons/fa";
import Home from '../components/Videocall/Home';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Messages from './chat/Chat';
import Chatbot from './Chatbot';
import Prepration from './Prepration';
import { AiFillAndroid } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowBack } from "react-icons/io";

const Dashboard = () => {
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [activeComponent, setActiveComponent] = useState('groups');
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const subjects = ['All', 'Interview', 'Aptitude', 'English', 'Programming'];

  const studyGroups = [
    { id: 1, name: ' Study Group', subject: 'English', members: 12, description: 'Advanced English concepts ' },
    { id: 2, name: 'Programming Study Group', subject: 'Programming', members: 8, description: 'Programming Study Group for beginners' },
    { id: 3, name: 'study Group', subject: 'Aptitude', members: 15, description: 'Study of Aptitude for competitive exams' },
    { id: 4, name: 'Interview Preparation Group', subject: 'Interview', members: 20, description: 'Implementation and analysis of interview questions' }
  ];

  const filteredGroups = selectedSubject === 'All' ? studyGroups : studyGroups.filter(group => group.subject === selectedSubject);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-xl h-screen fixed overflow-y-auto animate-slide-in-left">
        <div className="p-6">
          <h2 className="text-2xl text-indigo-600 font-bold mb-6 flex gap-2 items-center">
            <FaBookReader className='text-indigo-500' /> VirtualStudy
          </h2>
          <hr className='mb-6' />
          <nav className="flex flex-col gap-3">
            {[{
              key: 'groups', label: 'Study Groups', icon: <FaBook />
            }, {
              key: 'create', label: 'Create Group', icon: <FaPlus />
            }, {
              key: 'video', label: 'Video Call', icon: <FaVideo />
            }, {
              key: 'ai', label: 'Ask with AI', icon: <FaRobot />
            }, {
              key: 'preparation', label: 'Preparation', icon: <FaBrain />
            }].map(item => (
              <button
                key={item.key}
                onClick={() => setActiveComponent(item.key)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 text-lg ${activeComponent === item.key ? 'bg-indigo-600 text-white shadow-md' : 'hover:bg-gray-100 text-gray-800'}`}
              >
                {item.icon} {item.label}
              </button>
            ))}
          </nav>
          <hr className='my-4' />
          <Link to="/about" className="flex items-center gap-2 px-4 py-3 mb-2 rounded-lg transition-all hover:duration-300 text-lg hover:bg-gray-100 text-gray-800 ">
            <AiFillAndroid />About Us
          </Link>
          <Link to="/contact" className="flex items-center gap-2 px-4 py-3 rounded-lg transition-all hover:duration-300 text-lg hover:bg-gray-100 text-gray-800">
            <IoIosCall />Contact Us
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="ml-64 flex-1 flex flex-col">
        <div className='h-16 w-full bg-white shadow flex items-center justify-between px-6 animate-fade-in-down'>
          {/* Profile Icon with Tooltip */}
          <div className="relative group flex gap-1">
            <CgProfile className="text-2xl text-gray-700 cursor-pointer" /> 
            <p>{currentUser?.email}</p>
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              {currentUser?.email}
            </div>
          </div>

          {/* User info + Logout */}
          <div className="flex items-center gap-4 ">
            {/* <p className="font-medium text-gray-600">{currentUser?.email?.split('@')[0]}</p> */}
            <button onClick={handleLogout} className="flex justify-center gap-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
            <IoMdArrowBack className='mt-1' />Logout
            </button>
          </div>
        </div>

        <div className="flex-1 px-8 py-6 animate-fade-in">
          {activeComponent === 'groups' && (
            <>
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Study Groups</h1>
                <div className="flex gap-2">
                  {subjects.map((subject) => (
                    <button
                      key={subject}
                      onClick={() => setSelectedSubject(subject)}
                      className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-300 border ${selectedSubject === subject ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-indigo-100 border-gray-300'}`}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGroups.map((group) => (
                  <div key={group.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition transform hover:scale-[1.02] duration-200">
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">{group.name}</h3>
                    <p className="text-indigo-600 mb-2 font-medium">{group.subject}</p>
                    <p className="text-gray-600 mb-4">{group.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{group.members} members</span>
                      <Link to={`/${group.subject.toLowerCase()}`} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                        Join Group
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeComponent === 'create' && (
            <div className="bg-white p-8 rounded-lg shadow animate-fade-in">
              <Messages room="general" />
            </div>
          )}

          {activeComponent === 'video' && (
            <div className="bg-white p-8 rounded-lg shadow animate-fade-in">
              <Home />
            </div>
          )}

          {activeComponent === 'ai' && (
            <div className="bg-white p-8 rounded-lg shadow animate-fade-in">
              <Chatbot />
            </div>
          )}

          {activeComponent === 'preparation' && (
            <div className="bg-white p-8 rounded-lg shadow animate-fade-in">
              <Prepration />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
