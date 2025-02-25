import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  // Añadimos un console.log para depuración
  console.log('User data in Profile:', user);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6">User Profile</h2>
        
        {user ? (
          <div className="space-y-4">
            <div className="border-b pb-2">
              <span className="font-semibold text-gray-700">Username:</span>
              <span className="ml-2 text-gray-900">{user.username || 'N/A'}</span>
            </div>
            
            <div className="border-b pb-2">
              <span className="font-semibold text-gray-700">Role:</span>
              <span className="ml-2 text-gray-900 capitalize">{user.role || 'N/A'}</span>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mt-4">
                Welcome to Digital Builders School!
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center text-red-500">
            No user information available. Please log in.
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;