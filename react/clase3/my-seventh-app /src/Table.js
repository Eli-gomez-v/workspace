import React, { Component } from 'react';

// Componente funcional con arrow function
const TableHeader = () => { // Se crea un componente funcional TableHeader que renderiza una fila de encabezado de tabla
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
function TableBody(props) { // Se crea un componente funcional TableBody que renderiza las filas de datos de la tabla
  const rows = props.peopleData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <button onClick={() => props.removePeople(index)}>Delete</button>
      </tr> // Se agrega un botón para eliminar personas
    );
  });
  return <tbody>{rows}</tbody>;
}

// Componente de clase
class Table extends Component {
  render() {
    const { peopleData, removePeople, title } = this.props;
    return (
      <table>
        {title}
        <TableHeader />
        <TableBody peopleData={peopleData} removePeople={removePeople} />
      </table>
    );
  }
}

export default Table;