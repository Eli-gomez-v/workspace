// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';
import Profile from './components/Profile/Profile';
import UsersList from './components/Users/Users';
import StudentsList from './components/StudentsList/StudentsList';

const App = () => {
  const token = localStorage.getItem('token');
  let decodedToken = null;
  let isAuthenticated = false;
  let userRole = null;

  if (token) {
    try {
      decodedToken = decodeToken(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp && decodedToken.exp > currentTime) {
        isAuthenticated = true;
        userRole = decodedToken.role;
      } else {
        localStorage.removeItem('token');
      }
    } catch (error) {
      console.error('Token verification error:', error);
      localStorage.removeItem('token');
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta de login como predeterminada */}
        <Route path="/login" element={<Login />} />

        {/* Ruta raíz protegida */}
        <Route 
          path="/" 
          element={
            isAuthenticated ? <Layout /> : <Navigate to="/login" replace />
          }
        >
          {/* Ruta de perfil por defecto */}
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />

          {/* Rutas de usuarios para admin */}
          {userRole === 'admin' && (
            <Route path="users" element={<UsersList />} />
          )}

          {/* Rutas de estudiantes para admin y teacher */}
          {(userRole === 'admin' || userRole === 'teacher') && (
            <Route path="students" element={<StudentsList />} />
          )}
        </Route>

        {/* Redirigir cualquier ruta desconocida al login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;