// AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { decodeToken } from 'react-jwt';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Estado para almacenar los datos del usuario y el estado de carga
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Al montar el componente, verificamos si hay un token almacenado
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        // Decodificamos el token usando react-jwt
        const decoded = decodeToken(token);
        setUser(decoded);
      } catch (error) {
        console.error('Error al decodificar el token:', error);
        localStorage.removeItem('token');
        setUser(null);
      }
    }
    setLoading(false);
  }, []);

  // Función para iniciar sesión
  const login = async (username, password) => {
    try {
      const response = await fetch('http://localhost:3000/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Error en la autenticación');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);

      // Decodificamos el token y actualizamos el estado del usuario
      const decoded = decodeToken(data.token);
      setUser(decoded);
      return true;
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      return false;
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  // Si está cargando, mostramos un indicador de carga
  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para utilizar el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};
export default AuthProvider;