import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    // Añadimos console.log para depuración
    console.log('Token from localStorage:', token);

    if (token) {
      try {
        const decoded = jwtDecode(token);
        
        // Añadimos console.log para ver qué se está decodificando
        console.log('Decoded token:', decoded);

        // Verificar expiración del token
        if (decoded.exp * 1000 > Date.now()) {
          setUser(decoded);
        } else {
          // Token expirado
          localStorage.removeItem('token');
          setUser(null);
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        localStorage.removeItem('token');
        setUser(null);
      }
    }
    setLoading(false);
  }, []);

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
        throw new Error('Authentication failed');
      }

      const data = await response.json();
      
      // Añadimos console.log para ver el token recibido
      console.log('Received token:', data.token);

      // Almacenar el token
      localStorage.setItem('token', data.token);
      
      // Decodificar y establecer el usuario
      const decoded = jwtDecode(data.token);
      
      // Añadimos console.log para ver el usuario decodificado
      console.log('Decoded user:', decoded);

      setUser(decoded);
      
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};