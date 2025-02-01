import React from 'react';

// El componente WelcomeMessage recibe una prop userName y la muestra en un h1
const WelcomeMessage = ({ userName }) => {
  return <h1>Hey, {userName}!</h1>;
};

export default WelcomeMessage;