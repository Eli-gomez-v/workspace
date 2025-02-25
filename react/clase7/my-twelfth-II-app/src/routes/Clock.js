import React, { useState, useEffect } from "react";

const Clock = () => { 
  const [date, setDate] = useState(new Date());

  // Función que actualiza la hora actual
  const tick = () => {
    setDate(new Date()); 
  };

  // Efecto que se ejecuta cada segundo
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000); // Cada segundo se ejecuta la función tick
    return function cleanup() { // Función de limpieza
      clearInterval(timerID); // Se limpia el temporizador
    };
  }, []);

  return ( // Retorna el JSX y muestra la hora actual en el navegador
    <div>
      <h1>Clock giving the Time</h1> 
      <h2>It is {date.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;