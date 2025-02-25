import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Table from './Table';
import Form from './Form';

// Función loader para obtener datos de la API
export async function loader() {
  const url = "https://dummyjson.com/users";
  let usersApi = await fetch(url);
  usersApi = await usersApi.json();
  const users = usersApi.users.map((user) => {
    return {
      name: user.firstName,
      job: user.company.title
    };
  });
  return users;
}

const TableUsers = () => {
  const users = useLoaderData();
  const [people, setPeople] = useState(users);

  const removePeople = (index) => {
    setPeople(people.filter((person, i) => i !== index));
  };

  const handleSubmit = (person) => {
    setPeople([...people, person]);
  };

  return (
    <div className="container">
      <h1>People</h1>
      <Table peopleData={people} removePeople={removePeople} />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};

export default TableUsers;