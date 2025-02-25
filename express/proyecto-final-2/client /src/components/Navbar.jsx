import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  let userRole = null;

  if (token) {
    const decodedToken = jwt_decode(token);
    userRole = decodedToken.role;
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <ul>
        {token ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            {userRole === 'admin' && (
              <li>
                <Link to="/users">Users</Link>
              </li>
            )}
            {userRole === 'teacher' && (
              <li>
                <Link to="/students">Students</Link>
              </li>
            )}
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
