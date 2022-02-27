import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='signup-card'>
      <Link to='/signup' className='signup-title'>
        Sign Up
      </Link>
      <div className='signup-form'>
        <input type={'text'} placeholder={'Username'} />
        <input type={'text'} placeholder={'FullName'} />
        <input type={'email'} placeholder={'Email'} />
        <input type={'password'} placeholder={'Password'} />
        <input type={'submit'} value={'SUBMIT'} />
      </div>
    </div>
  );
};

export default Signup;
