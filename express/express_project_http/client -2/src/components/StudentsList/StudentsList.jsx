// src/components/StudentsList/StudentsList.jsx
import React, { useState, useEffect } from 'react';
import { decodeToken } from 'react-jwt';

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  const decoded = token ? decodeToken(token) : null;

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        // Para teachers, fetch sus propios estudiantes
        if (decoded?.role === 'teacher') {
          const response = await fetch('http://localhost:3000/api/teachers/students', {
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
        } 
        // Para admin, fetch todos los estudiantes
        else if (decoded?.role === 'admin') {
          const response = await fetch('http://localhost:3000/api/students', {
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
        }

        setLoading(false);
      } catch (err) {
        console.error('Error fetching students:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    if (token && decoded) {
      fetchStudents();
    }
  }, [token, decoded]);

  if (loading) {
    return <div className="text-center py-4">Loading students...</div>;
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
        {decoded?.role === 'teacher' ? 'My Students' : 'Students List'}
      </h1>
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">DNI</th>
              <th className="border p-2">Date of Birth</th>
              {decoded?.role === 'admin' && <th className="border p-2">Teacher</th>}
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-100">
                <td className="border p-2">{student.name}</td>
                <td className="border p-2">{student.dni}</td>
                <td className="border p-2">
                  {new Date(student.date_of_birth).toLocaleDateString()}
                </td>
                {decoded?.role === 'admin' && (
                  <td className="border p-2">{student.teacher_id}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentsList;