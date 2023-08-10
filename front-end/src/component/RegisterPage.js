import React from 'react';
import '../Styles/register.css'

const Register = () => {
  return (
    <div className="register-page">
      <div className="left-box">
        <h1>TUNER</h1>
        <p>Enjoy Multiple Videos at one place</p>
        <a id="an" href="/LoginPage">Sign In</a>
      </div>
      <div className="right-box">
        <h2 id="ri">Register</h2>
        <p id="rig">Register to continue accessing pages</p>
        <div className="circle">
        <a href="your_drive_link_here" target="_blank" rel="noopener noreferrer">
          <span className="plus">+</span>
        </a>
        </div>
        <input type="text" placeholder="First Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone" />
        <input type="text" placeholder="Profession" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button>Register</button>
      </div>
    </div>
  );
};

export default Register;

