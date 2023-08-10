import React, { useState } from 'react';
import '../Styles/login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here
    console.log('Logging in:', email);
  };

  return (
    <div className="login-page">
      <div className="left-box">
        <div className="tuner-box">
          <h1>TUNER</h1>
          <p>ENJOY MULTIPLE VIDEOS AT ONE PLACE</p>
          <a id="an" href="/RegisterPage">Resgister</a>
        </div>
      </div>
      <div className="right-box">
        <div className="signin-box">
          <h2 className='sign'>Sign In</h2>
          <p className='si'>Sign into continue to access pages</p>
          
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
        </div>
      </div>
    </div>
  );
}

export default Login;
