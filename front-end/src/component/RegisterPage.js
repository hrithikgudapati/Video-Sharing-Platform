import React, { useRef } from 'react';
import '../Styles/register.css'
import { Link } from 'react-router-dom';

const Register = () => {
  let ProfileRef=useRef()

  function handleProfilePhoto(e){
    ProfileRef.current.click()
  }

  function handlePhoto(){
    let photo=ProfileRef.current.files[0]
    if(photo){
      console.log(photo)
    }
  }









  return (
    <div className="register-page">
      <div className="left-box">
        <div class='tuner-box'>
          <h1>MeTube</h1>
          <p>Enjoy Multiple videos at one place</p>
        </div>
        <Link id="an" to="/login">Sign In</Link>
      </div>
      <div className="right-box">
        <h2 id="ri">Register</h2>
        <p id="rig">Register to continue accessing pages</p>
        <form action="">
          <div className="circle" onClick={handleProfilePhoto}>
            <input ref={ProfileRef} type="file" onChange={handlePhoto}/>
            <span>+</span></div>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
          <input type="text" placeholder="Profession" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <div>

          <button type='submit'>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

