import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';


const App = () => {
  return (
    <Router basename="/react-form">
      <Routes>
  <Route path="/login" element={<LoginForm />} />
  <Route path="/" element={<SignupForm />} />
</Routes>

    </Router>
  );
};

export default App;
