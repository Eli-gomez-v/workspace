// src/services/api.js
const API_URL = 'http://localhost:3000';

export const fetchUsers = async (token) => {
  const response = await fetch(`${API_URL}/api/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  return response.json();
};

export const fetchStudents = async (token) => {
  const response = await fetch(`${API_URL}/api/students`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch students');
  }

  return response.json();
};

export const fetchTeacherStudents = async (teacherId, token) => {
  const response = await fetch(`${API_URL}/api/teachers/${teacherId}/students`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch teacher students');
  }

  return response.json();
};
