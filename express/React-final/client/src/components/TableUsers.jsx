import React, { useState, useEffect } from 'react';
import Table from './Table';

const TableUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:3000/api/users', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const removeUser = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };


  return (
    <div>
    <h1>Users</h1>
    <Table peopleData={users} removePeople={removeUser} />
  </div>
  );
};

export default TableUsers;