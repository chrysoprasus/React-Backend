// src/pages/HomeSite.jsx
// src/pages/HomeSite.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

function HomeSite() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null); // To handle errors

  const fetchDataWithToken = async () => {
    try {
      // Get token from localStorage
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found, please log in.');
        return;
      }

      // Decode token to get user ID
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;
      console.log('User ID:', userId);

      // Make request to fetch user info with token
      const response = await axios.get('http://localhost:5000/api/user/me', {
        headers: { 'x-auth-token': token }
      });

      // Set the username from response
      setUsername(response.data.username);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError('Error fetching user data');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token from local storage
    setUsername(''); // Clear the username
    setError(null); // Reset any error state
  };

  useEffect(() => {
    fetchDataWithToken();
  }, []);

  return (
    <div>
      <h1>Welcome to the Home Site</h1>
      {username ? (
        <div>
          <p className="text-lg">Hello, {username}!</p>
          <button 
            onClick={handleLogout} 
            className="bg-red-500 text-white p-2 rounded mt-2"
          >
            Logout
          </button>
        </div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <p>User not logged in.</p>
      )}
      <Link to="/auth" className="text-blue-500 hover:underline">
        Go to Authentication
      </Link>
    </div>
  );
}

export default HomeSite;
