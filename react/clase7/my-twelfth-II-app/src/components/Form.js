//Form.js
import React, { Component } from 'react';

class Form extends Component {
  initialState = {
    name: '',
    job: '',
    delete: '',
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <label>Job</label>
        <input
          type="text"
          name="job"
          value={job}
          onChange={this.handleChange}
        />
        <label>Delete</label>
        <input
          type="text"
          name="delete"
          value={this.state.delete}
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
        <br />
        <h2>Remove</h2>
        <p>Use the delete button in the table to remove a person.</p>
      </form>
    );
  }
}

export default Form;