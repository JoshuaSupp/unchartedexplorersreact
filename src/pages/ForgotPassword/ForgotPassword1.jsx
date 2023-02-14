import React from 'react';
import './ForgotPassword.css';

function ForgotPassword1() {
  return(
    <div>
        <div class="center">
            <center><img width="100px" src="images/meu_labs_logo.png" alt="Meu Labs logo"/></center>
            <h1>Check your mail</h1>
            <pre>We have sent a password and recover instructions to your 
                email. If you didn’t recieve a code,<a href="/#">Resend</a></pre>
            <form action="/ForgotPassword2.jsx" method="post" autocomplete="off">

                <div class="txt_field">
                    <input maxlength="6" type="text" id="code" name="Code" required/>
                    <span></span>
                    <label for="code">Code</label>
                </div>
                <button onclick="document.ForgotPassword2()">Continue</button>
            </form>
        </div>
    </div>
  );
}

export default ForgotPassword1;