// src/router.jsx
// En router.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './components/Profile/index';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            {/* Otras rutas protegidas */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
