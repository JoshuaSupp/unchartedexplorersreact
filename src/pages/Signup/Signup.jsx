import React from 'react';
import './Signup.css';

function Signup () {
  return(
    <div>
        <nav>
            <button class="language">English (UK)</button>
        </nav>

        <form>
            <img src="/img/meu_labs_logo.png" alt="logo" class="img"/>
            <h1>Welcome!</h1>

            <div class="anchor">First time here, create account! Already have one?
            </div>
            <br/>
            <a href="/" style={{color:'blue'}}><u> Log in</u></a>
        
            <br/>
            <br/>

            <div class="group">
            <input type="text"/><span class="highlight"></span><span class="bar"></span>
            <label>Username</label>
            </div>
            <div class="group">
            <input type="email"/><span class="highlight"></span><span class="bar"></span>
            <label>Email*</label>
            </div>
            <div class="group">
                <input type="email"/><span class="highlight"></span><span class="bar"></span>
                <label>Create Password</label>
            </div>
            <div class="group">
                <input type="email"/><span class="highlight"></span><span class="bar"></span>
                <label>Role</label>
            </div>

            <div id="login">
            <a href='/Signup'>
            <button type="button" class="button buttonBlue">Sign Up
                <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
            </button>
            </a>
            </div>
        </form>
    </div>
  );
}

export default Signup;