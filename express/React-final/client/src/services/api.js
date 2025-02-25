// src/services/api.js
const API_URL = 'http://localhost:3000';

export const loginUser = async (username, password) => {
  try {
    console.log('Attempting login with:', { username });
    const response = await fetch(`${API_URL}/api/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Login error response:', errorText);
      throw new Error('Login failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Login fetch error:', error);
    throw error;
  }
};

export const fetchUsers = async (token) => {
  try {
    const response = await fetch(`${API_URL}/api/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch users error:', error);
    throw error;
  }
};
