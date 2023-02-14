import React from 'react';
import './Signin.css';

function Signin() {
  return (
    <div>
      <nav>
        <button class="language">English (UK)</button>
      </nav>

      <img width="100px" src="/Login/img/meu_labs_logo.png" alt="logo" class="center"/>
      <h1>Welcome</h1>
      <div class="anchor">
        Don't have an account?<h2><a href="/Signup.jsx">Sign up</a></h2>
      </div>

      <form>
        <div class="group">
          <input type="text"/><span class="highlight"></span><span class="bar"></span>
          <label>Email</label>
        </div>
        <div class="group">
          <input type="email"/><span class="highlight"></span><span class="bar"></span>
          <label>Password</label>
        </div>
        <div id="login">
          <button type="button" class="button buttonBlue">Login
            <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signin;