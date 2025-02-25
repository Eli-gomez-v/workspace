import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../api';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    };
    fetchUsers();
  }, []);
  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  };

  return (
    <div className="users-page">
      <h2>Usuarios del Sistema</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - Rol: {user.role}
          </li>
        ))}
      </ul>
      <li key={user.id}>
        {user.username} - Rol: {user.role}
        <button onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
      </li>
    </div>
  );
};

export default Users;
