import React from 'react';
import WelcomeMessage from './WelcomeMessage';

// El componente WelcomePage recibe una prop userName y la pasa a WelcomeMessage
const WelcomePage = ({ userName }) => {
  return (
    <>
      <WelcomeMessage userName={userName} />
      {/** Some other welcome page code */}
    </>
  );
};

export default WelcomePage;