// src/components/Sidebar/index.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { decodeToken } from '../utils/jwt';
import { loginUser } from '../services/api';

const Sidebar = () => {
  const token = localStorage.getItem('token');
  const decodedToken = token ? decodeToken(token) : null;

  return (
    <div className="w-64 bg-white rounded-lg shadow-lg p-4 h-fit">
      <nav className="space-y-2">
        <Link
          to="/dashboard/profile"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg transition duration-200 ${
              isActive
                ? 'bg-purple-600 text-white'
                : 'text-purple-600 hover:bg-purple-100'
            }`
          }
        >
          Profile
        </Link>
        
        {decodedToken?.role === 'admin' && (
          <Link
            to="/dashboard/users"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg transition duration-200 ${
                isActive
                  ? 'bg-purple-600 text-white'
                  : 'text-purple-600 hover:bg-purple-100'
              }`
            }
          >
            Users
          </Link>
        )}
        
        {decodedToken?.role === 'teacher' && (
          <Link
            to="/dashboard/students"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg transition duration-200 ${
                isActive
                  ? 'bg-purple-600 text-white'
                  : 'text-purple-600 hover:bg-purple-100'
              }`
            }
          >
            Students
          </Link>
        )}
        
        <Link
          to="/logout"
          className="block px-4 py-2 rounded-lg text-red-600 hover:bg-red-100 transition duration-200"
        >
          Logout
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;