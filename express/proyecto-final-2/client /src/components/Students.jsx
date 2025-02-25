import React, { useState, useEffect } from 'react';
import { getStudentsByTeacher } from '../api';

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getStudentsByTeacher();
        setStudents(data);
      } catch (error) {
        console.error('Error al obtener los estudiantes:', error);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div className="students-page">
      <h2>Estudiantes Asignados</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - ID: {student.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
