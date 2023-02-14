import React from 'react';
import './ForgotPassword.css';

function ForgotPassword2() {

    function myFunction() {
        var x = document.getElementById("myInput");
        if (x.type === "password") {
            x.type = "text"
        } 
        else {
            x.type = "password"
        }
    }

  return(
    <div>
        <div class="center">
            <center><img width="100px" src="images/meu_labs_logo.png" alt="Meu Labs logo"/></center>
            <h1>Create new password</h1>
            <pre>Your new password should be different from your 
                previous used passwords.</pre>

            <form action="/ForgotPassword3.jsx" method="post" autocomplete="off">
                <div class="txt_field">
                    <input minlength="8" type="password" id="password" name="password" required/>
                    <span></span>
                    <label for="password">Password</label>
                </div>
                <pre>Must be atleast 8 characters.</pre>
                <div class="txt_field">
                    <input type="password" id="password" name="password" required/>
                    
                    <script>

                    </script>
                    <span></span>
                    <label for="password">Confirm password</label>
                </div>
                <pre>Both passwords must match.</pre>
                <button onclick="document.forgot_password3()">Reset password</button>
            </form>
        </div>
    </div>
  );
}

export default ForgotPassword2;