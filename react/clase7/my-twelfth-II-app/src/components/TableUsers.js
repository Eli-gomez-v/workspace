import React from 'react';
import { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import Table from './Table';
import Form from './Form';

const TableUsers = () => {
  const users = useLoaderData();
  const [people, setPeople] = useState(users);

  const removePeople = (index) => {
    setPeople((prevPeople) => prevPeople.filter((_person, i) => i !== index));
  };

  const handleSubmit = (person) => {
    setPeople((prevPeople) => [...prevPeople, person]);
  };

  return (
    <div className="container">
      <h1>People</h1>
      <Table peopleData={people} removePeople={removePeople} />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}


export default TableUsers;