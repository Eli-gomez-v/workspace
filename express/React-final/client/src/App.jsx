// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login.jsx';
import Layout from './components/Layout.jsx';
import Profile from './components/Profile.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import UsersList from './components/UsersList.jsx';       // Vista de usuarios para admin
import StudentsList from './components/StudentsList.jsx';    // Vista de estudiantes para teacher (o admin si así lo decides)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Todas las vistas protegidas se muestran dentro del Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />

          {/* Ruta protegida para admin: permite ver el listado de usuarios */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="users" element={<UsersList />} />
          </Route>

          {/* Ruta protegida para teacher (o admin, según convenga): permite ver estudiantes */}
          <Route element={<ProtectedRoute allowedRoles={['teacher', 'admin']} />}>
            <Route path="students" element={<StudentsList />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
