import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import Profile from './Profile';
import Users from './Users';
import Students from './Students';

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route
      path="/profile"
      element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      }
    />
    <Route
      path="/users"
      element={
        <ProtectedRoute requiredRole="admin">
          <Users />
        </ProtectedRoute>
      }
    />
    <Route
      path="/students"
      element={
        <ProtectedRoute requiredRole="teacher">
          <Students />
        </ProtectedRoute>
      }
    />
    <Route path="/" element={<Navigate to="/login" />} />
  </Routes>
);

export default AppRoutes;
