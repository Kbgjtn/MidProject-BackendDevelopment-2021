import React from 'react'
import './signup.css'

const Signup = () => {
  return (
    <div className='signup-card'>
      <h1 className='signup-title'>Sign Up</h1>
      <div className='signup-form'>
        <input type={'text'} placeholder={'Username'} />
        <input type={'text'} placeholder={'FullName'} />
        <input type={'email'} placeholder={'Email'} />
        <input type={'password'} placeholder={'Password'} />
        <input type={'submit'} value={'SUBMIT'} />
      </div>
    </div>
  );
}

export default Signup