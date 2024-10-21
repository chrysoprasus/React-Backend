// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './store/userSlice';
import App from './App';
import './index.css'; // Tailwind CSS
import { Toaster } from 'react-hot-toast';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    <Toaster />
  </Provider>
);

