import React from 'react';
import './Signin.css';

function Signin() {
  return (
    <div>
      <nav>
        <button class="language">English (UK)</button>
      </nav>

      <img width="50px" src="/img/meu_labs_logo.png" alt="logo" class="img"/>
      <h1>Welcome</h1>
      <div class="anchor">
        Don't have an account?<h2><a href="/Signup">Sign up</a></h2>
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
          <a href='/Dashboard'>
          <button type="button" id='loginbutton'>Login
            <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
          </button>
          </a>
        </div>
      </form>
      <div id='forgot'>
          <a href='/ForgotPassword'> </a>
        </div>
      
    </div>
  );
}

export default Signin;