// Este componente es el punto de entrada de la aplicación
import React from 'react';
import WelcomePage from './WelcomePage';

// El componente App renderiza WelcomePage y le pasa una prop userName
const App = () => {
  const userName = "Joe";
  return <WelcomePage userName={userName} />;
};

export default App;