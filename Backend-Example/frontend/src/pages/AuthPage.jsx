// frontend/src/pages/AuthPage.jsx
import React, { useState } from 'react';
import LoginForm from '../components/Login/LoginForm';
import SignUpForm from '../components/Login/SignupForm';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">{isLogin ? 'Login' : 'Sign Up'}</h1>
      {isLogin ? (
        <LoginForm />
      ) : (
        <SignUpForm />
      )}
      <button onClick={() => setIsLogin(!isLogin)} className="mt-4">
        Switch to {isLogin ? 'Sign Up' : 'Login'}
      </button>
    </div>
  );
};

export default AuthPage;

