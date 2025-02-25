import axios from 'axios';
import jwt_decode from 'jwt-decode';

const API_URL = 'http://localhost:3000'; // Modifica según la configuración de tu backend

const getAuthToken = () => localStorage.getItem('token');

export const loginUser = async (username, password) => {
  const response = await axios.post(`${API_URL}/token`, {
    username,
    password,
  });
  return response.data.token;
};

export const getUserProfile = async () => {
  const token = getAuthToken();
  const response = await axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getAllUsers = async () => {
  const token = getAuthToken();
  const response = await axios.get(`${API_URL}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getStudentsByTeacher = async () => {
  const token = getAuthToken();
  const response = await axios.get(`${API_URL}/students`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Agrega más funciones para funcionalidades opcionales como eliminar usuarios o estudiantes
export const deleteUser = async (userId) => {
  const token = getAuthToken();
  await axios.delete(`${API_URL}/users/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
