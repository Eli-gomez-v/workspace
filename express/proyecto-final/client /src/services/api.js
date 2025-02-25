const API_URL = 'http://localhost:3000';

// Auth functions
export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/api/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

// Users functions
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
    throw error;
  }
};

// Students functions
export const fetchStudents = async (token) => {
  try {
    const response = await fetch(`${API_URL}/api/students`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch students');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const fetchTeacherStudents = async (teacherId, token) => {
  try {
    const response = await fetch(`${API_URL}/api/teachers/${teacherId}/students`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch teacher students');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
