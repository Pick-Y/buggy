// Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateAccountForm from '../pages/CreateAccountForm.jsx';
import Home from '../pages/Home';
import { AccountPage } from '../pages/AccountPage.jsx';
import LoginPage from '../pages/Login.jsx';

const RoutesComponent = () => {
  return (

    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/create-account" element={<CreateAccountForm/>}/>
      <Route path="/account-page" element={<AccountPage />}/>
      <Route path="/login-page" element={<LoginPage />}/>
    </Routes>
  );
};

export default RoutesComponent;

