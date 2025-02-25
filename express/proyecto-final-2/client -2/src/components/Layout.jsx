import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Layout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        
        <nav>
          <ul className="space-y-2">
            <li>
              <Link 
                to="/profile" 
                className="block py-2 px-4 hover:bg-gray-700 rounded transition duration-200"
              >
                Profile
              </Link>
            </li>

            {/* Admin-only routes */}
            {user?.role === 'admin' && (
              <li>
                <Link 
                  to="/users" 
                  className="block py-2 px-4 hover:bg-gray-700 rounded transition duration-200"
                >
                  Users
                </Link>
              </li>
            )}

            {/* Teacher and Admin routes */}
            {['teacher', 'admin'].includes(user?.role) && (
              <li>
                <Link 
                  to="/students" 
                  className="block py-2 px-4 hover:bg-gray-700 rounded transition duration-200"
                >
                  Students
                </Link>
              </li>
            )}

            <li>
              <button 
                onClick={handleLogout}
                className="w-full text-left py-2 px-4 hover:bg-gray-700 rounded transition duration-200"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;