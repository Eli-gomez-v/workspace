// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();
  console.log('ProtectedRoute user:', user);  
  // Si no hay usuario autenticado, redirige al login.
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  // Si se especifican roles permitidos y el usuario no tiene el rol correcto
  if (allowedRoles && !allowedRoles.includes(user.type.toLowerCase())) {
    // Puedes redirigir al perfil u otro lugar
    return <Navigate to="/profile" replace />;
  }
  
  // De lo contrario, renderiza sus rutas hijas
  return <Outlet />;
};

export default ProtectedRoute;
