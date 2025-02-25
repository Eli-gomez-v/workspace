import React from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.peopleData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>{row.delete}</td>
        <td>
          <button onClick={() => props.removePeople(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

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