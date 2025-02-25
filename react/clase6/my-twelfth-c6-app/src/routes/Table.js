import React from 'react';

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
        <td>
          <button onClick={() => props.removePeople(index)}>Delete</button>
        </td>
      </tr> // Se agrega un botón para eliminar personas
    );
  });
  return <tbody>{rows}</tbody>;
}

// Componente funcional
const Table = (props) => {
  const { peopleData, removePeople } = props;
  return (
    <table>
      <TableHeader />
      <TableBody peopleData={peopleData} removePeople={removePeople} />
    </table>
  );
};

export default Table;