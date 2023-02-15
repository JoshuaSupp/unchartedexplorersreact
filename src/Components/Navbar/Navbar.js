import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
         <div class="container">
            <div class="navigation">
                <ul>
                    <li>
                        <a href="/#">
                            <img style={{width:'150px'}}
                                src="/img/meu_labs_logo1.png"
                                alt='Meu Labs Logo'/>
                        </a>
                    </li>
                    <li>
                        <a href="/Dashboard">
                            <span class="icon">
                                <ion-icon name="grid-outline"></ion-icon>
                            </span>
                            <span class="title">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/Admin">
                            <span class="icon">
                                <ion-icon name="person-outline"></ion-icon>
                            </span>
                            <span class="title">Admin</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            <span class="icon">
                                <ion-icon name="people-outline"></ion-icon>
                            </span>
                            <span class="title">Employees</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            <span class="icon">
                                <ion-icon name="chatbubble-outline"></ion-icon>
                            </span>
                            <span class="title">Chat</span>
                        </a>
                    </li>
                   
                
                    <li>
                        <a href="/ContactUs">
                            <span class="icon">
                                <ion-icon name="call-outline"></ion-icon>
                            </span>
                            <span class="title">Contact Us</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar