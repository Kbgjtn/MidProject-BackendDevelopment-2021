import React from 'react';
import { Content, Navbar, Header, Footer, Landing } from './Containers';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/Landingpage/LandingPage';

const App = () => {
  return (
    <div className='App'>
      <LandingPage />
    </div>
  );
};

export default App;
