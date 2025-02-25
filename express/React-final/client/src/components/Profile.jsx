// src/components/Profile/Profile.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext.jsx';

const Profile = () => {
  const { user } = useAuth();

  // Si no hay usuario (no está logueado), muestra un mensaje o redirige
  if (!user) return <div>You must be logged in to view your profile.</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.type}</p>
      </div>
    </div>
  );
};

export default Profile;
