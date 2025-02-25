import React, { useState, useEffect } from 'react';
import { useLoaderData, useActionData } from "react-router-dom";
import Table from '../components/Table';
import UserForm from '../components/Form';

export async function loader() {
  const url = "http://dummyjson.com/users";
  let usersApi = await fetch(url);
  usersApi = await usersApi.json();
  const users = usersApi.users.map((user) => {
    return {
      name: user.firstName,
      job: user.company.title };
    });
  return users;
}

// Función action para gestionar los datos del formulario
export async function action({ request }) {
  const formData = await request.formData();
  const fields = Object.fromEntries(formData);
  let user = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: fields.name,
      lastName: "Test",
      age: 250,
      company: {
        title: fields.job,
      },
    }),
  });
  user = await user.json();
  return user;
}

const TableUsers = () => {
  const users = useLoaderData();
  const userAdded = useActionData();
  const [people, setPeople] = useState(users);

  useEffect(() => {
    if (userAdded) {
      const newUser = {
        id: userAdded.id,
        name: userAdded.firstName,
        job: userAdded.company.title,
      };
      setPeople((p) => [newUser, ...p]);
    }
  }, [userAdded]);

  const removePeople = (index) => {
    setPeople(people.filter((person, i) => i !== index));
  };

  const handleSubmit = (person) => {
    setPeople([...people, person]);
  };
  const title = <h1>Nice People</h1>;
  return (
    <div className="container">
      <h1>Table Users where your can Path people</h1>
      <UserForm handleSubmit={handleSubmit} />
      <Table peopleData={people} removePeople={removePeople} title={title} />
    </div>
  );
};

export default TableUsers;