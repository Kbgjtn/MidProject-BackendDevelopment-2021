import React, { useState } from 'react';
import {
  Navbar,
  Header,
  Content,
  Landing,
  Footer,
  Signin,
  Signup,
} from '../../Containers';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

function LandingPage() {
  const [isNotAuth] = useState(true);

  return (
    <Router>
      <home>
        <Navbar />
        <Routes>
          {/* <Route path='/signin' element={<LoginPage />} /> */}
          <Route path='/home' element={<Landing />} />
          <Route path='/about' element={<Landing />} />
          <Route path='/' element={<Header />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/course'
            element={isNotAuth ? <Navigate to='/' /> : <Content />}
          />
        </Routes>
      </home>
      <Footer />
    </Router>
  );
}

export default LandingPage;
