// src/routes/Students.jsx
import React, { useState, useEffect } from 'react';
import { fetchTeacherStudents } from '../services/api';
import { decodeToken } from '../utils/jwt';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getStudents = async () => {
      try {
        const token = localStorage.getItem('token');
        const decoded = decodeToken(token);
        if (decoded && decoded.id) {
          const data = await fetchTeacherStudents(decoded.id, token);
          setStudents(data);
        }
      } catch (err) {
        setError('Error fetching students');
      }
    };
    getStudents();
  }, []);

  return (
    <div className="container">
      <h2 className="text-3xl font-bold mb-6 text-purple-600">Students</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>DNI</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.dni}</td>
              <td>{new Date(student.date_of_birth).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;