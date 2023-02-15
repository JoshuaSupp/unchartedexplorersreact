import React from 'react'
import './CreateAdmin.css'

const CreateAdmin = () => {
  return (
    <div id='cadmin'>
       <a  href='/Admin'>
          <button id='btnback' >
            Back
          </button>
        </a>
         <form id="createadmin">

    <input type="text" id="Name" name="firstname" placeholder="Admin Name .."/>

    
    <input type="text" id="Contact" name="lastname" placeholder="Admin Contact No.."/>

   
    <select id="Department" name="Department">
      <option value="Administration">Administration</option>
      <option value="Accounts">Accounts</option>
      <option value="Marketing">Marketing</option>
      <option value="Learning">Learning</option>
    </select>
  
    <input type="submit" value="Submit"/> 
  </form>
    </div>
  )
}

export default CreateAdmin