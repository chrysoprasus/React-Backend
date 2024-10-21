// src/components/Login/LoginForm.jsx
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure that username and password are not empty before sending
    if (!username || !password) {
      toast.error('Please provide both username and password');
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password
      });

      localStorage.setItem('token', response.data.token);
      toast.success("Login successful!");
      navigate('/'); // Redirect to homepage after successful login
    } catch (error) {
      console.error("Login error:", error.response?.data);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Login failed");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 mb-2 border border-gray-300 rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 mb-2 border border-gray-300 rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
