import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { decodeToken, isTokenValid } from '../../utils/jwt';

const ProtectedRoute = ({ children, roles = [] }) => {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const decodedToken = token ? decodeToken(token) : null;

  if (!token || !isTokenValid(token)) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (roles.length > 0 && !roles.includes(decodedToken?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;