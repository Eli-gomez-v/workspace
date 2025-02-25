import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem('token');
        
        // If user is an admin, fetch all students
        const url = user.role === 'admin' 
          ? 'http://localhost:3000/api/students'
          : `http://localhost:3000/api/teachers/${user.id}/students`;

        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch students');
        }

        const data = await response.json();
        setStudents(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStudents();
  }, [user]);

  const handleDeleteStudent = async (studentId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this student?');
    
    if (confirmDelete) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:3000/api/students/${studentId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to delete student');
        }

        // Remove the deleted student from the list
        setStudents(students.filter(s => s.id !== studentId));
      } catch (err) {
        alert(`Error deleting student: ${err.message}`);
      }
    }
  };

  if (loading) return <div className="text-center py-4">Loading students...</div>;
  if (error) return <div className="text-red-500 text-center py-4">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">
        {user.role === 'admin' ? 'All Students' : 'My Students'}
      </h1>
      {students.length === 0 ? (
        <p className="text-center text-gray-500">No students found</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b">
                  <td className="px-4 py-2">{student.name}</td>
                  <td className="px-4 py-2">{student.email}</td>
                  <td className="px-4 py-2 text-right">
                    <button 
                      onClick={() => handleDeleteStudent(student.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentsList;