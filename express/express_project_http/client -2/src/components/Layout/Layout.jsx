// src/components/Layout/Layout.jsx
import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';

const Layout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const decoded = token ? decodeToken(token) : null;

  console.log('Decoded token in Layout:', decoded); // Añade este log para verificar el contenido del token

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Digital Builders</h1>
        </div>
        <nav className="mt-10">
          <ul>
            <li className="mb-2">
              <Link 
                to="/profile" 
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Profile
              </Link>
            </li>
            {decoded?.role === 'admin' && (
              <li className="mb-2">
                <Link 
                  to="/users" 
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Users
                </Link>
              </li>
            )}
            {decoded?.role === 'admin' && (
              <li className="mb-2">
                <Link 
                  to="/teachers-list" 
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Teachers List
                </Link>
              </li>
            )}
            
            {(decoded?.role === 'admin' || decoded?.role === 'teacher') && (
              <li className="mb-2">
                <Link 
                  to="/students" 
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Students
                </Link>
              </li>
            )}
            <li>
              <button 
                onClick={handleLogout} 
                className="w-full text-left px-4 py-2 hover:bg-gray-700"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-10 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;