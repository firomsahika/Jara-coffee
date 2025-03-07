import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 monteserrat">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Admin Login</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-semibold text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              placeholder='eg.John'
              required
              className="placeholder:text-sm w-full px-3 py-2 mt-1 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring focus:text-green-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold  text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder='password'
              required
              className="placeholder:text-sm w-full px-3 py-2 mt-1 bg-gray-100 text-gray-700  rounded-md focus:outline-none focus:ring focus:text-green-500"
            />
          </div>
          <Link to="/admin/blog-post">
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Log In
          </button>
          </Link>
        </form>
        <p className="text-sm text-center text-gray-600">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;