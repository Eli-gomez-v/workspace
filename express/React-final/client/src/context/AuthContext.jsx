// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import { decodeToken } from 'react-jwt';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Esta función se encargará de actualizar el estado a partir del token almacenado
  const loadUserFromStorage = () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = decodeToken(token);
        // Verifica que el token no haya expirado
        if (decoded.exp && decoded.exp > Date.now() / 1000) {
          setUser(decoded);
        } else {
          localStorage.removeItem('token');
          setUser(null);
        }
      } catch (error) {
        console.error('Error decodificando token:', error);
        localStorage.removeItem('token');
        setUser(null);
      }
    }
  };

  useEffect(() => {
    loadUserFromStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loadUserFromStorage }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
