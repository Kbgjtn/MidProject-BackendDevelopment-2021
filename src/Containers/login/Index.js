// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './index.css';

// const LoginPage = () => {
//   const [login, setLogin] = useState(true);
//   const [signUp, setSignUp] = useState(false);
//   // const [control,setControl] = useState(true)

//   const loginController = () => {
//     setSignUp(() => false);
//     setLogin(() => true);
//   };
//   const signUpController = () => {
//     setSignUp(() => true);
//     setLogin(() => false);
//   };
//   // const controller = () => {
//   //   setControl((prev)=> !prev)
//   // };

//   return (
//     <div className='sign-page'>
//       <div className='navigation'>
//         <Link to='/signin'>
//           <button onClick={loginController}>Sign In</button>
//         </Link>
//         <Link to='/signup'>
//           <button onClick={signUpController}>Sign Up</button>
//         </Link>
//         {/* <button onClick={controller}> Up</button> */}
//       </div>
//       <>
//         {login ? <Login /> : ''}
//         {signUp ? <Signup /> : ''}
//       </>
//     </div>
//   );
// };

// export default LoginPage;
