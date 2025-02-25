// src/components/StudentsList.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext.jsx';

const StudentsList = () => {
  const { user } = useAuth();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!user) return; // Evita el render si no hay usuario autenticado

    const fetchStudents = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3000/students', {
          method: 'GET',
          credentials: 'include', // Si usas sesiones
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || 'Failed to fetch students');
        }
        const data = await response.json();
        setStudents(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching students:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStudents();
  }, [token, user]);

  if (loading) return <div>Loading students...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Students List</h1>
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <ul>
          {students.map(student => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentsList;
