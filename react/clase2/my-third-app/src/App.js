/* eslint-disable no-unused-vars */
import React from 'react';

// Componente App con una variable name
const name = 'John Doe';
const headingWithName = <h1>Hello, {name}</h1>;

class App extends React.Component {
  upperFunction = (name) => String(name).toUpperCase();

  getGreeting(user) {
    if (user) {
      return <h1>Hello, {this.upperFunction(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

  render() {
    const name = 'John Doe';
    return this.getGreeting(name);
  }
}
export default App;