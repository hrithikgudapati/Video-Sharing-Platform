import React from 'react';
import '../Styles/navbar.css';
import { Link } from 'react-router-dom';
import {  useSelector } from "react-redux"
function Navbar() {
  let isLogin=useSelector((state)=>{
      return state.Login.IsLogin
  })
  return (
    <div id='navbar-container'>
      <div id="logo">
        <h3>MeTube</h3>
      </div>
      <div id="search">
        <input type="text" placeholder='search' />
      </div>
      <div id="actions">
        {isLogin?<><Link to='/Myvideos'><span>MyVideos</span></Link>
       <span>Upload</span>
       <Link to="/"><span>Logout</span></Link>
       </>
       :
       <><Link to='/login'><span>Login</span></Link>
       <Link to="/register"><span>Register</span></Link></> }
      </div>
    </div>
  );
}

export default Navbar;
