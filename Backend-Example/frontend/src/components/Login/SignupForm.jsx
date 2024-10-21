// frontend/src/components/Login/SignUpForm.jsx
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUpForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Log values to check them
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  
    // Create a new user object
    const newUser = { username, email, password };
    console.log("New user object:", newUser); // Log the new user object
  
    try {
      // Make a POST request to the sign-up endpoint
      const response = await axios.post("http://localhost:5000/api/auth/register", newUser);
      
      // Store the token in local storage
      localStorage.setItem('token', response.data.token); // Assuming the token is in response.data.token
      console.log(response.data.token); // Log the token to check it
  
      // Show a success toast message
      toast.success("Sign up successful!");
      navigate('/'); // Navigate to the home page
    } catch (error) {

      // Show an error toast message
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Sign up failed");
      }
      console.error("Sign up error:", error); // Log the error for more context
    
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
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
