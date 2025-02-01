// src/Form.js
import React, { Component } from "react";

class Form extends Component { // Se crea un componente Form que extiende de Component
  initialState = { // Se crea un objeto con los valores iniciales del estado
    name: "",
    job: "",
  };
  state = this.initialState; // Se inicializa el estado con el objeto initialState

  handleChange = (event) => { // Método para manejar el cambio de los inputs
    const { name, value } = event.target; // Se obtiene el nombre y el valor del input

    this.setState({ // Se actualiza el estado con el nuevo valor del input
      [name]: value, 
    });
  };

  submitForm = () => { // Método para enviar el formulario
    this.props.handleSubmit(this.state); // Se llama al método handleSubmit que se pasa como props desde App.js y se le pasa el estado actual
    this.setState(this.initialState); // Se reinicia el estado con el objeto initialState
  };

  render() { // Renderiza el formulario
    const { name, job } = this.state; // Se obtienen los valores del estado
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange} // Se llama al método handleChange cada vez que se cambia el valor del input
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange} // Se llama al método handleChange cada vez que se cambia el valor del input
        />
        <input type="button" value="submit" onClick={this.submitForm} /> {/* Se llama al método submitForm cuando se hace clic en el botón */}
      </form>
    );
  }
}

export default Form;