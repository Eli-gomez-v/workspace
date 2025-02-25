import React from 'react';
import { decodeToken } from '../../utils/jwt';

const Profile = () => {
  const token = localStorage.getItem('token');
  const decodedToken = token ? decodeToken(token) : null;

  if (!decodedToken) {
    return <div>No user information available</div>;
  }

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Profile</h2>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-500">Email:</label>
          <p className="text-lg text-gray-900">{decodedToken.email}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500">Role:</label>
          <p className="text-lg text-gray-900">{decodedToken.role}</p>
        </div>
        {decodedToken.id && (
          <div>
            <label className="text-sm font-medium text-gray-500">User ID:</label>
            <p className="text-lg text-gray-900">{decodedToken.id}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;