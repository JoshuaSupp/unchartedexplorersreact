import React from 'react'
import './Help.css';

function Help() {

    // let toggle = document.querySelector('.toggle');
    // let navigation = document.querySelector('.navigation');
    // let main = document.querySelector('.main');

    // toggle.onclick = function () {
    //     navigation.classList.toggle('active');
    //     main.classList.toggle('active');
    // }

    // let list = document.querySelectorAll('.navigation li');
    // function activelink() {
    //     list.forEach((item) =>
    //         item.classList.remove('hovered'));
    //     this.classList.add('hovered');
    // }
    // list.forEach((item) =>
    //     item.addEventListener('mouseover', activelink));

    // let subMenu = document.getElementById("subMenu");

    // function toggleMenu() {
    // subMenu.classList.toggle("open-menu");
    // }

  return(
    <div>
    <div class="container">
        <div class="navigation">
            <ul>
                <li>
                    <a href="/#">
                        <img alt='Meu Labs Logo' width="200px" src="../Dashboard/images/meu_labs_logo1.png"/>
                    </a>
                </li>
                <li>
                    <a href="/#">
                        <span class="icon">
                            <ion-icon name="grid-outline"></ion-icon>
                        </span>
                        <span class="title">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="/#">
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
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <li>
                    <a href="/#">
                        <span class="icon">
                            <ion-icon name="call-outline"></ion-icon>
                        </span>
                        <span class="title">Contact Us</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="main">
        <div class="topbar">
            <div class="toggle">
                <ion-icon name="menu-outline"></ion-icon>
            </div>

            <div class="search">
                <label>
                    <input type="text" placeholder="Search here"/>
                    <ion-icon name="search-outline"></ion-icon>
                </label>
            </div>

            <img class="user" alt='User' src="../Dashboard/images/user.png" onclick="toggleMenu()"/>

            <div class="sub-menu-wrap" id="subMenu">
                <div class="sub-menu">
                    <div class="user-info">
                        <img alt='User' src="../Dashboard/images/user.png"/>
                        <h3>Shayen Yatagama</h3>
                    </div>
                    <hr/>

                    <a href="/#" class="sub-menu-link">
                        <images><ion-icon name="person-circle-outline"></ion-icon></images>
                        <p>Profile</p>
                        <span><ion-icon name="chevron-forward-outline"></ion-icon></span>
                    </a>
                    <a href="/#" class="sub-menu-link">
                        <images><ion-icon name="create-outline"></ion-icon></images>
                        <p>Edit Profile</p>
                        <span><ion-icon name="chevron-forward-outline"></ion-icon></span>
                    </a>
                    <a href="/#" class="sub-menu-link">
                        <images><ion-icon name="settings-outline"></ion-icon></images>
                        <p>Settings</p>
                        <span><ion-icon name="chevron-forward-outline"></ion-icon></span>
                    </a>
                    <a href="/#" class="sub-menu-link">
                        <images><ion-icon name="information-circle-outline"></ion-icon></images>
                        <p>Help & Support</p>
                        <span><ion-icon name="chevron-forward-outline"></ion-icon></span>
                    </a>
                    <a href="/#" class="sub-menu-link">
                        <images><ion-icon name="log-out-outline"></ion-icon></images>
                        <p>Log out</p>
                        <span><ion-icon name="chevron-forward-outline"></ion-icon></span>
                    </a>
                </div>
            </div>
        </div>
    <img class="logo" alt='Meu Labs Logo' src="../help page/images/meu_labs_logo.png" width="200" height="200"/>
    <img class="admin" alt='Admin' src="./images/admin.jpeg" width="125" height="125"/>

    <img class="contact" alt='Contact' src="./images/contact.jpeg" width="125" height="125"/>

    <div class="topnav">

        <center><input class="Searchbar" type="text" placeholder="Type your probloem here"/></center>
        <center><button class=" button3">Search</button></center>
        <button class=" button1">Admin</button>
        <button class=" button2">Contact Us</button>
    </div>

    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
    </div>
  );
}

export default Help;