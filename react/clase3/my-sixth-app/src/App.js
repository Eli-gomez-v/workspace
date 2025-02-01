// src/App.js
import React from 'react';

const FancyBorder = (props) => { // Componente FancyBorder
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
};

const WelcomeDialog = () => { // Utilizando FancyBorder y lo renderiza con h1 y p como hijos
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Bienvenido!</h1>
      <p className="Dialog-message">Explora todos nuestros productos!</p>
    </FancyBorder>
  );
};

const GoodByeDialog = () => { // Utilizando FancyBorder lo renderiza con h1 y p como hijos
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Adiós!</h1>
      <p className="Dialog-message">Gracias por visitar nuestra web!</p>
    </FancyBorder>
  );
};

const App = () => { // Renderiza WelcomeDialog y GoodByeDialog
  return (
    <>
      <WelcomeDialog />
      <GoodByeDialog />
    </>
  );
};

export default App;