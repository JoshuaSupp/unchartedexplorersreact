import React from 'react';
import './ForgotPassword.css';

function ForgotPassword () {
  return(
    <div>
      <div class="center">
        <center><img width="100px" src="images/meu_labs_logo.png" alt="Meu Labs logo"/></center>
        <h1>Forgot password?</h1>
        <pre>Enter the email address associated with your account and we'll 
    send you an email with instructions to reset your password.</pre>

        <form action="/ForgotPassword1.jsx" method="post" autocomplete="off">

          <div class="txt_field">
            <input type="email" id="mail" name="mail" required/>
              <span></span>
              <label for="mail">Email
                <a href='/#'>*</a>
              </label>
          </div>
          <div>
          <a href='/ForgotPassword1'><button onclick="document.ForgotPassword1()">Reset password</button></a>
          </div>
            <div class="signup_link">Don't have an account?
              <a href="/Signup">Sign up</a>
            </div>
            <div class="signin_link">Alredy have one?
              <a href="/Signin">Sign in</a>
            </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;