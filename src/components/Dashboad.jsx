import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBrain, FaVideo, FaPlus, FaBook, FaRobot } from "react-icons/fa";
import Home from '../components/Videocall/Home'
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaBookReader } from "react-icons/fa";
import Messages from './chat/Chat';
import Chatbot from './Chatbot';

const Dashboard = () => {
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [activeComponent, setActiveComponent] = useState('groups');
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();
  //log out method
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const subjects = [
    'All',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'Computer Science',
    'Literature',
    'History'
  ];

  const studyGroups = [
    {
      id: 1,
      name: 'Calculus Study Group',
      subject: 'Mathematics',
      members: 12,
      description: 'Advanced calculus concepts and problem solving'
    },
    {
      id: 2,
      name: 'Quantum Physics',
      subject: 'Physics',
      members: 8,
      description: 'Exploring quantum mechanics principles'
    },
    {
      id: 3,
      name: 'Organic Chemistry',
      subject: 'Chemistry',
      members: 15,
      description: 'Study of organic compounds and reactions'
    },
    {
      id: 4,
      name: 'Data Structures',
      subject: 'Computer Science',
      members: 20,
      description: 'Implementation and analysis of data structures'
    }
  ];

  const filteredGroups = selectedSubject === 'All'
    ? studyGroups
    : studyGroups.filter(group => group.subject === selectedSubject);

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg h-screen fixed overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6 flex gap-2">  <FaBookReader className='mt-1'/>VirtualStudy</h2>
          <hr className='mb-6'/>
          <nav className="flex flex-col gap-3">
            <button
              onClick={() => setActiveComponent('groups')}
              className={`flex items-center gap-2 px-4 py-3 rounded text-lg ${activeComponent === 'groups' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'}`}
            >
              <FaBook /> Study Groups
            </button>
            <button
              onClick={() => setActiveComponent('create')}
              className={`flex items-center gap-2 px-4 py-3 rounded text-lg ${activeComponent === 'create' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'}`}
            >
              <FaPlus /> Create Group
            </button>
            <button
              onClick={() => setActiveComponent('video')}
              className={`flex items-center gap-2 px-4 py-3 rounded text-lg ${activeComponent === 'video' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'}`}
            >
              <FaVideo /> Video Call
            </button>
            <button
              onClick={() => setActiveComponent('ai')}
              className={`flex items-center gap-2 px-4 py-3 rounded text-lg ${activeComponent === 'ai' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'}`}
            >
              <FaRobot /> Ask with AI
            </button>
            <button
              onClick={() => setActiveComponent('preparation')}
              className={`flex items-center gap-2 px-4 py-3 rounded text-lg ${activeComponent === 'preparation' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'}`}
            >
              <FaBook /> Preparation
            </button>
          </nav>
        </div>
      </div>

      <div className="ml-64 flex-1 flex flex-col">
        {/* navbar */}
        <div className='h-16 w-full bg-white shadow-md flex items-center justify-between px-6'>
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-medium">{currentUser?.email?.split('@')[0]}</p>
            <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
              Logout
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-8 py-3">
          {activeComponent === 'groups' && (
            <>
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Study Groups</h1>
                <div className="flex gap-2">
                  {subjects.map((subject) => (
                    <button
                      key={subject}
                      onClick={() => setSelectedSubject(subject)}
                      className={`px-3 py-1 rounded text-sm ${selectedSubject === subject
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white hover:bg-gray-100'
                        }`}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGroups.map((group) => (
                  <div
                    key={group.id}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200"
                  >
                    <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
                    <p className="text-indigo-600 mb-2">{group.subject}</p>
                    <p className="text-gray-600 mb-4">{group.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {group.members} members
                      </span>
                      <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-200">
                        Join Group
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeComponent === 'create' && (
            <div className="bg-white p-8 rounded-lg shadow">
              {/* <h2 className="text-2xl font-bold mb-6">Create New Study Group</h2> */}
              <Messages room="general" />
            </div>
          )}

          {activeComponent === 'video' && (
            <div className="bg-white p-8 rounded-lg shadow">
              {/* <h2 className="text-2xl font-bold mb-6">Video Call</h2> */}
              <Home />
            </div>
          )}

          {activeComponent === 'ai' && (
            <div className="bg-white p-8 rounded-lg shadow">
              <Chatbot />
            </div>
          )}

          {activeComponent === 'preparation' && (
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-6">Preparation Materials</h2>
              <p className="text-gray-600">Study preparation materials would go here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
