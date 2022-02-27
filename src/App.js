import React from 'react';
import { Content, Navbar, Header, Footer } from './Containers';
import './App.css';
import Index from './Containers/login';

const App = () => {
  return (
    <div className='App'>
      <div className='header color--bg'>
        <Navbar />
        <Header />
      </div>
      <div>
        <Content />
        <Footer />
      </div>
      <Index />
    </div>
  );
};

export default App;
