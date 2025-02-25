import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Muestra los datos que se están enviando
      console.log('Enviando credenciales:', { username, password });

      const response = await fetch('http://localhost:3000/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // Registra el estado de la respuesta
      console.log('Respuesta del servidor:', {
        status: response.status,
        statusText: response.statusText
      });

      // Lee el contenido de la respuesta
      const responseData = await response.json();
      console.log('Datos de respuesta:', responseData);

      // Verifica si la respuesta es exitosa
      if (!response.ok) {
        throw new Error(responseData.message || 'Error de autenticación');
      }

      // Verifica si hay un token en la respuesta
      if (!responseData.token) {
        throw new Error('No se recibió un token de autenticación');
      }

      // Almacena el token
      localStorage.setItem('token', responseData.token);
      
      // Intenta decodificar el token para verificar su contenido
      try {
        const decodedToken = JSON.parse(atob(responseData.token.split('.')[1]));
        console.log('Token decodificado:', decodedToken);
      } catch (decodeError) {
        console.error('Error al decodificar el token:', decodeError);
      }

      // Navega al perfil
      navigate('/profile');

    } catch (err) {
      console.error('Error de inicio de sesión:', err);
      setError(err.message || 'Ocurrió un error inesperado');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Iniciar Sesión en Digital Builders School
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-center">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;