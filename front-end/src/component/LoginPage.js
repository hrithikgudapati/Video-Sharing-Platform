import React, { useState } from 'react';
import '../Styles/login.css'
import { Link, useNavigate } from 'react-router-dom';
import { setLogin,setToken } from '../data-store/features/LoginSlice';
import { useDispatch } from 'react-redux';
import { DoLogin } from '../data-store/api-utils';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let dispatch=useDispatch()
  let navigate=useNavigate()
  const handleLogin = () => {
    // Perform authentication logic here
    // console.log('Logging in:', email);

    DoLogin({email,password})
    .then((res)=>{
        if(res.token){
          dispatch(setLogin())
          dispatch(setToken(res.token))
          navigate('/')
        }
    })
  };

  return (
    <div className="login-page">
      <div className="left-box">
        <div className="tuner-box">
          <h1>MeTube</h1>
          <p>Enjoy Multiple videos at one place</p>
        </div>
          <Link id="an" to="/register">Register</Link>
      </div>
      <div className="right-box">
        <div className="signin-box">
          <h2 className='sign'>Sign In</h2>
          <p className='si'>Sign into continue to access pages</p>
          <form action='' method='Post'>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Sign In</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
