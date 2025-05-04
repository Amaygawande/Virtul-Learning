import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {  signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../../firebase'; 
import { Link } from 'react-router-dom';

function Login() {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value; 

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      setErr(true);
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">
            Login to your account
          </h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
              <FaUser className="h-5 w-5 text-gray-400" />
              <input
                type="email"
                name="email" 
                required
                className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
              <FaLock className="h-5 w-5 text-gray-400" />
              <input
                type="password"
                name="password"
                required
                className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500"
                placeholder="Password"
              />
            </div>
          </div>

          {err && <p className="text-red-500 text-sm">Invalid credentials. Try again.</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition duration-200"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <p className=" text-center text-sm text-gray-600">
                    You Don't have an account?{" "}
                    <Link to="/singup" className="text-indigo-600 hover:text-indigo-500 font-medium">
                        Sing in
                    </Link>
                </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
