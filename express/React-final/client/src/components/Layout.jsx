// src/components/Layout.jsx
import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx'; // Asegúrate de que la ruta sea correcta

const Layout = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  console.log("Usuario autenticado:", user);

  return (
    <div className="layout flex">
      <aside className="sidebar bg-gray-100 p-4">
        <nav>
          <ul>
            {/* Siempre mostramos Profile y Logout */}
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            {/* Si el usuario es de tipo admin, mostramos "Users" */}
            {user && user.type && user.type.toLowerCase() === "admin" && (
              <li>
                <NavLink to="/users">Users</NavLink>
              </li>
            )}
            {/* Si el usuario es de tipo teacher, mostramos "Students" */}
            {user && user.type && (user.type.toLowerCase() === "teacher" || user.type.toLowerCase() === "admin") && (
  <li>
    <NavLink to="/students">Students</NavLink>
  </li>
)}

            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="content flex-1 p-4">
        {/* Aquí se renderizan las rutas hijas */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
