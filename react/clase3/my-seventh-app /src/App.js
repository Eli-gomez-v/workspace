// src/App.js
import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = { // Es un objeto para almacenar perss. Se inicializa el estado con un array vacío 
    people: [],
  };

  removePeople = (index) => { // Método para eliminar personas y recibe un índice como argumento a través de filter
    const { people } = this.state; // Se obtiene el array de personas que pasamos a la tabla mediante this.state.people
    this.setState({ // Se actualiza el estado con el nuevo array de personas
      people: people.filter((character, i) => { // Se filtra el array de personas y se retorna un nuevo array sin el elemento que se eliminó
        return i !== index; // Se retorna un nuevo array sin el elemento que se eliminó
      }),
    });
  };

  handleSubmit = (character) => { // Método para agregar personas y recibe un objeto personaje como argumento
    this.setState({ people: [...this.state.people, character] }); // Se actualiza el estado con el nuevo array de personas
  };

  render() { // Renderiza la tabla y el formulario
    const title = <h1>Nice People</h1>; // Se crea un título para la tabla
    return (
      <div className="container"> {/* Se crea un contenedor para la tabla y el formulario */}
        <Table
          peopleData={this.state.people} // Se pasa el array de personas al componente Table mediante props
          removePeople={this.removePeople} // Se pasa el método removePeople al componente Table mediante props
          title={title} // Se pasa el título al componente Table mediante props
        />
        <Form handleSubmit={this.handleSubmit} /> {/* Se pasa el método handleSubmit al componente Form mediante props */}
      </div>
    );
  }
}

export default App;