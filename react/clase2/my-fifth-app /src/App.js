import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
  render() {
    const people = [
      {
        name: "John",
        job: "Developer"
      },
      {
        name: "Maya",
        job: "Architect"
      }
    ];
    return (
      <div className="container">
        <Table peopleData={people} />
      </div>
    );
  }
}

export default App;