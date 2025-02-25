import React from 'react';
import { Outlet } from 'react-router-dom';
import { decodeToken } from '../utils/jwt';

const Dashboard = () => {
  const token = localStorage.getItem('token');
  const decodedToken = token ? decodeToken(token) : null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome, {decodedToken?.email}
        </h1>
        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;