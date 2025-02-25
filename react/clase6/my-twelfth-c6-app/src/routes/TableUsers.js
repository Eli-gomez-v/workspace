import React, { useState, useEffect } from 'react';
import { useLoaderData, useActionData } from 'react-router-dom';
import Table from '../components/Table';
import UserForm from '../components/Form';

// Función loader para obtener datos de la API
export async function loader() {
  //throw new Error("oh an error!"); // Provocar un error intencionalmente
  try {
    const url = "https://dummyjson.com/users";
    let usersApi = await fetch(url);
    usersApi = await usersApi.json();
    console.log(usersApi);

    const users = usersApi.users.map((user) => {
      return {
        name: user.firstName,
        job: user.company.title
      };
    });
    return users;
  } catch (error) {
    console.error("Failed to load users", error);
    return [];
  }
}


// Función action para gestionar los datos del formulario
export async function action({ request }) {
  const formData = await request.formData();
  const fields = Object.fromEntries(formData);
  let user = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: fields.name,
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

  const title = <h1>Nice People ({people.length})</h1>;
  return (
    <div className="container">
      <UserForm handleSubmit={handleSubmit} />
      <Table peopleData={people} removePeople={removePeople} title={title} />
    </div>
  );
};

export default TableUsers;
