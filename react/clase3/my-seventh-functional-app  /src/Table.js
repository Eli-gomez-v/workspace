import React, { Component } from 'react';

// Compatible con el componente funcional App
// Componente funcional con arrow function
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

// Componente funcional con función tradicional
function TableBody(props) {
  const rows = props.peopleData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

// Componente de clase
class Table extends Component {
  render() {
    const { peopleData } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody peopleData={peopleData} />
      </table>
    );
  }
}

export default Table;