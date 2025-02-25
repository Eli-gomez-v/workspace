import React from 'react';

const Table = () => {
  const students = [
    { dni: '11111111A', name: 'Joe', date_of_birth: '1987-01-01' },
    { dni: '22222222B', name: 'María', date_of_birth: '1989-01-02' },
    { dni: '33333333C', name: 'Michel', date_of_birth: '1990-03-03' },
  ];

  const listStudents = students.map((student) => (
    <tr key={student.dni}>
      <td>{student.dni}</td>
      <td>{student.name}</td>
      <td>{student.date_of_birth}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>DNI</th>
          <th>Name</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>{listStudents}</tbody>
    </table>
  );
};

export default Table;