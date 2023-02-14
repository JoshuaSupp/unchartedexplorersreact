import React from 'react';
import './Signup.css';

function Signup () {
  return(
    <div>
        <nav>
            <button class="language">English (UK)</button>
        </nav>

        <form>
            <img src="img/image2.png" alt="logo" class="center"/>
            <h1>Welcome!</h1>

            <div class="anchor">First time here, create account! Already have one? <a href="./Signin/Signin.jsx">Log in</a>
            </div>
        
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
            <button type="button" class="button buttonBlue">Sign Up
                <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
            </button>
            </div>
        </form>
    </div>
  );
}

export default Signup;