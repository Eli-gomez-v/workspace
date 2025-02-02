import React from 'react';
import UserGreeting from './UserGreeting';
import SignUp from './SignUp';

// Componente funcional que muestra un mensaje según el estado de inicio de sesión
const Greeting = ({ isLoggedIn }) => { 
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <SignUp />;
};

export default Greeting;