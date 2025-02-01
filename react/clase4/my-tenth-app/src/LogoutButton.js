import React from 'react';

// Componente funcional LogoutButton que recibe una prop onClick
const LogoutButton = ({ onClick }) => {
  return (
    // Botón que muestra "Logout" y ejecuta la función onClick al hacer clic
    <button onClick={onClick}>
      Logout
    </button>
  );
};

export default LogoutButton;