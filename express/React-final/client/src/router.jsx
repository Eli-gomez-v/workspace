import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';
import Profile from './components/Profile';
import Users from './components/Users';
import Students from './components/Students';
import Logout from './routes/Logout';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'users',
            element: (
              <ProtectedRoute roles={['admin']}>
                <Users />
              </ProtectedRoute>
            ),
          },
          {
            path: 'students',
            element: (
              <ProtectedRoute roles={['teacher']}>
                <Students />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: 'logout',
        element: <Logout />,
      },
    ],
  },
]);

export default router;