import './login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Signin = () => {
  const [registerInput, setRegitsterInput] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    e.presist();
    setRegitsterInput({
      ...registerInput,
      [e.target.email]: e.target.value,
    });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const dataInput = {
      email: registerInput.email,
      password: registerInput.password,
    };

    axios.post(`/api/register`, dataInput).then((res) => {});
  };

  return (
    <div className='login-card'>
      <Link to='/signin' className='login-title'>
        Sign In
      </Link>
      <div className='login-form' onSubmit={registerSubmit}>
        <input
          type={'text'}
          placeholder={'Your Email'}
          onchange={handleInput}
          value={registerInput.email}
        />
        <input
          type={'password'}
          placeholder={'Your Password'}
          onchange={handleInput}
          value={registerInput.password}
        />
        <input type={'submit'} value={'SUBMIT'} />
        <a href='/'>Forgot your password?</a>
      </div>
    </div>
  );
};

export default Signin;
