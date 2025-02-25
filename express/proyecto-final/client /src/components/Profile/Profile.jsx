// src/components/Profile/Profile.jsx
import React from 'react';
import { decodeToken } from 'react-jwt';

const Profile = () => {
  const token = localStorage.getItem('token');
  const decoded = token ? decodeToken(token) : null;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      {decoded && (
        <div>
          <p><strong>Email:</strong> {decoded.username}</p>
          <p><strong>Role:</strong> {decoded.role}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;