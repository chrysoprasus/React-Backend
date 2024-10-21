// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import HomeSite from './pages/HomeSite';
//import MainLayout from './components/MainLayout';

const App = () => {
  return (
    <Router>
     {/*<MainLayout> */}
        <Routes>
          <Route path="/" element={<HomeSite/>} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      {/*</MainLayout>*/}
    </Router>
  );
};

export default App;
