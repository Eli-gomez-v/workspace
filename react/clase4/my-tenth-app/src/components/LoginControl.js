import React, { useState } from 'react';
import Greeting from './Greeting';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Warning from './Warning';

// Componente funcional LoginControl que maneja el estado de inicio de sesión
const LoginControl = () => {
  // Variable de estado isLoggedIn inicializada a false
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Método que cambia el estado isLoggedIn a true
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  // Método que cambia el estado isLoggedIn a false
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {/* Renderiza el componente Greeting y le pasa la prop isLoggedIn */}
      <Greeting isLoggedIn={isLoggedIn} />
      <Warning warn={isLoggedIn} />
      {/* Renderiza el botón LoginButton si isLoggedIn es false, de lo contrario renderiza LogoutButton */}
      {isLoggedIn ? (
        <LogoutButton onClick={handleLogoutClick} />
      ) : (
        <LoginButton onClick={handleLoginClick} />
      )}
    </div>
  );
};

export default LoginControl;