// registrationOperations.js
import { registerUser } from './userSlice';

const BASE_URL = 'http://localhost:3001';

export const register = (userData) => async (dispatch) => {
  try {
    dispatch(registerUser(userData));

    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const data = await response.json();
      const { user } = data;
      dispatch(registerUser(user));
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Błąd podczas rejestracji:', error);
    return false;
  }
};


