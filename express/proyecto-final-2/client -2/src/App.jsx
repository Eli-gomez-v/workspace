import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Layout from './components/Layout';
import Profile from './components/Profile';
import UsersList from './components/UsersList';
import StudentsList from './components/StudentsList';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route index element={<Profile />} />
              <Route path="profile" element={<Profile />} />
              
              <Route 
                path="users" 
                element={
                  <ProtectedRoute allowedRoles={['admin']} />
                }
              >
                <Route index element={<UsersList />} />
              </Route>

              <Route 
                path="students" 
                element={
                  <ProtectedRoute allowedRoles={['admin', 'teacher']} />
                }
              >
                <Route index element={<StudentsList />} />
              </Route>
            </Route>
          </Route>
          
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;