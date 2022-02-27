import React, { useState } from 'react';
import Login from './login';
import Signup from './Signup';

const Index = () => {
  const [login, setLogin] = useState(true);
  const [signUp, setSignUp] = useState(false);

  const loginController = () => {
    setSignUp((prev) => !prev);
    setLogin((prev) => !prev);
  };
  const signUpController = () => {
    setSignUp((prev) => !prev);
    setLogin((prev) => !prev);
  };

  return (
    <>
      <div className='navigation'>
        <button onClick={loginController}>Sign In</button>
        <button onClick={signUpController}>Sign Up</button>
      </div>
      <>
        {login ? <Login /> : ''}
        {signUp ? <Signup /> : ''}
      </>
    </>
  );
};

export default Index;
