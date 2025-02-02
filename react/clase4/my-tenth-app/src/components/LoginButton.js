import React from 'react';

// Componente funcional LoginButton que recibe una prop onClick
const LoginButton = ({ onClick }) => {
  return (
    // Botón que muestra "Login" y ejecuta la función onClick al hacer clic
    <button onClick={onClick}>
      Login
    </button>
  );
};

export default LoginButton;