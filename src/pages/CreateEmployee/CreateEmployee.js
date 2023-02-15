import React from 'react'
import './CreateEmployee.css' 

const CreateEmployee = () => {
  return (
    <div>
       <a  href='/Employees'>
          <button id='btnback' >
            Back
          </button>
        </a>
    <div id="createemployee">

 

         <form id="Create AN Employee">
    
    <input type="text" id="Name" name="firstname" placeholder="Employee Name .."/>

   
    <input type="text" id="Contact" name="lastname" placeholder="Employee Contact No.."/>

    
    <select id="Department" name="Department">
      <option value="Administration">Administration</option>
      <option value="Accounts">Accounts</option>
      <option value="Marketing">Marketing</option>
      <option value="Learning">Learning</option>
    </select>
  
    <input type="submit" value="Submit"/> 

    
  
  </form>
  
  </div>
  
    </div>
  )
}

export default CreateEmployee