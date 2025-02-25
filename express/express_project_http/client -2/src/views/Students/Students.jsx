import React, { useState, useEffect } from 'react';
import { useJwt } from 'react-jwt';
import * as api from '../../services/api';

function Students() {
    const [students, setStudents] = useState();
    const { decodedToken } = useJwt(localStorage.getItem('token'));

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const token = localStorage.getItem('token');
                // Si el usuario es profesor, obtiene solo sus estudiantes
                const response = decodedToken?.type === 'teacher'
                  ? await api.getTeacherStudents(decodedToken.id, token)
                  : await api.getStudents(token); // Si es admin, obtiene todos los estudiantes
                setStudents(response);
            } catch (error) {
                console.error('Error al obtener estudiantes:', error);
            }
        };

        fetchStudents();
    }, [decodedToken]);

    return (
        <div>
            <h1>Estudiantes</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>DNI</th>
                        <th>Fecha de nacimiento</th>
                        {/*... otras columnas que necesites */}
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.dni}</td>
                            <td>{student.date_of_birth}</td>
                            {/*... otras celdas que necesites */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Students;