import React from 'react';
import './ListItem.css'; // Importa el archivo CSS para ListItem

const ListItem = ({ dni, value, date_of_birth }) => {
  return (
    <li className="list-item">
      <h3 className="list-item-title">{value}</h3>
      <p className="list-item-dni">DNI: {dni}</p>
      <p className="list-item-dob">Date of Birth: {date_of_birth}</p>
    </li>
  );
};

export default ListItem;