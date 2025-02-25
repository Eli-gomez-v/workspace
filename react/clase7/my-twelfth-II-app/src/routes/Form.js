// src/Form.js
import React, { Component } from "react";
import { Form } from "react-router-dom";

class userForm extends Component { // Se crea un componente Form que extiende de Component
  initialState = { // Se crea un objeto con los valores iniciales del estad
  };
  state = this.initialState;
  handleChange = (event) => {
  };

  submitForm = () => { // Método para enviar el formulario
    //this.props.handleSubmit(this.state); // Se llama al método handleSubmit que se pasa como props desde App.js y se le pasa el estado actual
    this.setState(this.initialState); // Se reinicia el estado con el objeto initialState
  };

  render() { // Renderiza el formulario
    const { name, job } = this.state; // Se obtienen los valores del estado
    return (
      <Form method="post" id="user-form" onSubmit={this.submitForm}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange} // Se llama al método handleChange cada vez que se cambia el valor del input
        />
        <label htmlFor="job">Job: </label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange} // Se llama al método handleChange cada vez que se cambia el valor del input
        />
        <input type="button" value="submit" onClick={this.submitForm} /> {/* Se llama al método submitForm cuando se hace clic en el botón */}
      </Form>
    );
  }
}

export default userForm;