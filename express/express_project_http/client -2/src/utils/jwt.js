// src/utils/jwt.js
import { decodeToken } from 'react-jwt';

export const isTokenValid = (token) => {
  try {
    const decoded = decodeToken(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp && decoded.exp > currentTime;
  } catch (error) {
    console.error('Token validation error:', error);
    localStorage.removeItem('token');
    return false;
  }
};

export { decodeToken };
