// App.js
import React from "react";

// Clase Clock (componente de clase)
class Clock extends React.Component {
  constructor(props) { // Constructor de la clase
    super(props); // Llama al constructor de la clase padre
    this.state = { date: new Date() }; // Inicializa el estado
  }

  componentDidMount() { // Método que se ejecuta después de que el componente se monta
    this.timerID = setInterval(() => this.tick(), 1000); // Cada segundo se llama a la función tick
  }

  componentWillUnmount() { // Método que se ejecuta antes de que el componente se desmonte
    clearInterval(this.timerID); // Limpia el temporizador
  }

  tick() { // Función que actualiza el estado
    this.setState({ date: new Date() }); // Actualiza el estado
  }

  render() { // Método que renderiza el componente
    return ( // Retorna el JSX y muestra la hora actual en el navegador
      <div> 
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const App = () => { // Componente funcional App que renderiza el componente Clock 
  return <Clock />;
};

export default App;