import React from 'react'
import './Employees.css'
const Employees = () => {
  return (
    <div id='emppg'>
      <a  href='/Dashboard'>
          <button id='btnback' >
            Back
          </button>
        </a>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <h1>EMPLOYEES</h1>
<table id="employees">
<tr>
  <th>Employee Details</th>
  <th>Ratings</th>
</tr>
<tr>
  <td>Thulith Edirisinghe(YOU) <br/>
      Director Of Learning and Development / Co-Founder 
          </td>
          <td><span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
</td>
</tr>
<tr>
    <td>Shayen Yatagama 
        HR Manager / Co-Founder
    </td>
    <td><span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
</td>
</tr>
   <tr>
    <td>Pasindu Thisaranga
        Director Of Business / Co-Founder
    </td>
    <td>
    <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
</td>
    
  </tr>
  <tr>
  <td>Joshua Suppiah
    Instructor
  </td>
    <td><span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
</td>
    
  </tr>

</table>
<a href='./CreateEmployee'>

<button id="BTNcreate">
Create an Employee
        </button>
        </a>
    </div>
  )
}

export default Employees