import React, { useState } from 'react';

const Dashboard = () => {
  const [selectedSubject, setSelectedSubject] = useState('All');

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
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Subjects</h2>
          <nav>
            {subjects.map((subject) => (
              <button
                key={subject}
                onClick={() => setSelectedSubject(subject)}
                className={`w-full text-left px-4 py-2 rounded mb-2 text-lg ${
                  selectedSubject === subject
                    ? 'bg-indigo-600 text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {subject}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">Study Groups</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              className="text-3xl bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200"
            >
              <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
              <p className="text-indigo-600 mb-2">{group.subject}</p>
              <p className="text-gray-600 mb-4">{group.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {group.members} members
                </span>
                <button className="bg-indigo-600 rounded-lg text-xl text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-200">
                  Join Group
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
