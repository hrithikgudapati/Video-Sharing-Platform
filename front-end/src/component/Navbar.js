import React from 'react'
import '../Styles/navbar.css'
function Navbar() {
  return (
    <div id='navbar-container'>
      <div id="logo">
        <h3>MeTube</h3>
      </div>
      <div id="search">
        <input type="text" placeholder='search' />
      </div>
      <div id="actions">
            <span>Login</span>
            <span>Register</span>
      </div>
    </div>
  )
}

export default Navbar
