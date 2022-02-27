import React, { useState } from 'react';
import Login from './login';
import Signup from './Signup';
import './index.css';



const LoginPage = () => {
  const [login, setLogin] = useState(true);
  const [signUp, setSignUp] = useState(false);
  // const [control,setControl] = useState(true)

  const loginController = () => {
    setSignUp(() => false);
    setLogin(() => true);
  };
  const signUpController = () => {
    setSignUp(() => true);
    setLogin(() => false);
  };
  // const controller = () => {
  //   setControl((prev)=> !prev)
  // };

  return (
    <div className='sign-page'>
      <div className='navigation'>
        <button onClick={loginController}>Sign In</button>
        <button onClick={signUpController}>Sign Up</button>
        {/* <button onClick={controller}> Up</button> */}
      </div>
      <>
        {login ? <Login /> : ''}
        {signUp ? <Signup /> : ''}
        {/* {control ? <Login /> : <Signup />} */}
      </>
    </div>
  );
};

export default LoginPage;
