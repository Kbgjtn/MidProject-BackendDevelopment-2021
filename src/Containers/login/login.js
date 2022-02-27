import './login.css';

const Login = () => {
  // const forms = [
  //   { type: 'text', placeholder: 'Your Email' },
  //   { type: 'password', placeholder: 'Your Password' },
  //   // { type: 'submit', placeholder: 'SUBMIT' },
  // ];
  // const form = forms.map((form)=><input type={form.type} placeholder />)

  return (
    <div className='login-card'>
      <h1 className='login-title'>Log In</h1>
      <div className='login-form'>
        <input type={'text'} placeholder={'Your Email'} />
        <input type={'password'} placeholder={'Your Password'} />
        <input type={'submit'} value={'SUBMIT'} />
        <a href='/'>Forgot your password?</a>
      </div>
    </div>
  );
};
export default Login;
