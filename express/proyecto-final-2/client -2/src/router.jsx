// src/router.jsx
import React from 'react';
import { 
  createBrowserRouter, 
  Navigate, 
  RouterProvider as ReactRouterProvider 
} from 'react-router-dom';
import jwtDecode from 'jwt-decode';

// Importaciones de componentes
import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';
import Profile from './components/Profile/Profile';
import UsersList from './components/Users/Users';
import StudentsList from './components/StudentsList/StudentsList';
import TeacherList from './components/Teachers/TeacherList';

// Componente de Ruta Protegida
const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token);
    
    if (allowedRoles && !allowedRoles.includes(decoded.role)) {
      return <Navigate to="/login" replace />;
    }

    return children;
  } catch (error) {
    localStorage.removeItem('token');
    return <Navigate to="/login" replace />;
  }
};

// Crear el router
const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: (
      <ProtectedRoute allowedRoles={['admin', 'user', 'teacher']}>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Profile />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'users',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <UsersList />
          </ProtectedRoute>
        )
      },
      {
        path: 'teachers-list',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <TeacherList />
          </ProtectedRoute>
        )
      }
      {
        path: 'students',
        element: (
          <ProtectedRoute allowedRoles={['admin', 'teacher']}>
            <StudentsList />
          </ProtectedRoute>
        )
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />
  }
]);

// Componente de envoltura para RouterProvider
const RouterProvider = () => {
  return <ReactRouterProvider router={router} />;
};

export default RouterProvider;