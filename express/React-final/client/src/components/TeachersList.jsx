// src/components/Teachers/TeachersList.jsx
import React, { useState, useEffect } from 'react';
import { decodeToken } from 'react-jwt';

const TeachersList = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  const decoded = token ? decodeToken(token) : null;

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        // Para teacher, fetch sus propios datos 
        if (decoded?.role === 'teacher') {
          const response = await fetch('http://localhost:3000/api/teachers', {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          });

          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || 'Failed to fetch teachers');
          }

          const data = await response.json();
          setTeachers(data);
        }
        
        // Para admin, fetch todos los teachers
        else if (decoded?.role === 'admin') {
          const response = await fetch('http://localhost:3000/api/teachers', {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          });

          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || 'Failed to fetch teachers');
          }

          const data = await response.json();
          setTeachers(data);
        }

        setLoading(false);
      } catch (err) {
        console.error('Error fetching teachers:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    if (token && decoded) {
      fetchTeachers();
    }
  }, [token, decoded]);

  if (loading) {
    return <div className="text-center py-4">Loading teachers...</div>;
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        {decoded?.role === 'teacher' ? 'My Teacher Information' : 'Teachers List'}
      </h1>
      
      {teachers.length === 0 ? (
        <p>No teachers found.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Last Name</th>
              <th className="border p-2">DNI</th>
              <th className="border p-2">Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id} className="hover:bg-gray-100">
                <td className="border p-2">{teacher.name}</td>
                <td className="border p-2">{teacher.last_name}</td>
                <td className="border p-2">{teacher.dni}</td>
                <td className="border p-2">
                  {new Date(teacher.date_of_birth).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TeachersList;