import React from 'react';
import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const ProtectedRoute = ({ children, requiredRole }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  const decodedToken = jwt_decode(token);
  const userRole = decodedToken.role;

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/profile" />;
  }

  return children;
};

export default ProtectedRoute;
