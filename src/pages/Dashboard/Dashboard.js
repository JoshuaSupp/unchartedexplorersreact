import React from 'react';
import './Dashboard.css';

function Dashboard() {

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
    //     subMenu.classList.toggle("open-menu");
    // }

  return(
    <div>
        <div class="container">
            <div class="navigation">
                <ul>
                    <li>
                        <a href="/Dashboard">
                            <img style={{width:"200px"}}
                                src="img/meu_labs_logo1.png"
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
                        <a href="/Employees">
                            <span class="icon">
                                <ion-icon name="people-outline"></ion-icon>
                            </span>
                            <span class="title">Employees</span>
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
                    <li>
                        <a href="/">
                            <span class="icon">
                                <ion-icon name="chatbubble-outline"></ion-icon>
                            </span>
                            <span class="title">Log Out</span>
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

                <img class="user"
                    src="/img/user.png"
                    onclick="toggleMenu()"
                    alt='User'/>

                <div class="sub-menu-wrap" id="subMenu">
                    <div class="sub-menu">
                        <div class="user-info">
                            <img
                                src="/img/user.png"
                                alt=''/>
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
                        <a href="/Help" class="sub-menu-link">
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
            
            <div class="cardBox">
                <div class="card">
                    <div>
                        <div class="numbers">1,574</div>
                        <div class="cardName">Employees</div>
                    </div>
                    <div class="iconBx">
                        <ion-icon name="people-outline"></ion-icon>
                    </div>
                </div>
                <div class="card">
                    <div>
                        <div class="numbers">574</div>
                        <div class="cardName">Instructors</div>
                    </div>
                    <div class="iconBx">
                        <ion-icon name="school-outline"></ion-icon>
                    </div>
                </div>
                <div class="card">
                    <div>
                        <div class="numbers">100</div>
                        <div class="cardName">Departments</div>
                    </div>
                    <div class="iconBx">
                        <ion-icon name="business-outline"></ion-icon>
                    </div>
                </div>
                <div class="card">
                    <div>
                        <div class="numbers">$7,567</div>
                        <div class="cardName">Earning</div>
                    </div>
                    <div class="iconBx">
                        <ion-icon name="cash-outline"></ion-icon>
                    </div>
                </div>
            </div>

            <div class="graphBox">
                <div class="box">
                    <h2>Leaves</h2>
                    <br/>
                    <canvas id="myChart"></canvas>
                </div>
                <div class="box">
                    <h2>Attendence</h2>
                    <br/>
                    <canvas id="Attendence"></canvas>
                </div>
            </div>

            <div class="details">
                <div class="candidates">
                    <div class="cardheader">
                        <h2>Hiring Pipeline</h2>
                        <a href="/#" class="btn">View All</a>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>Job applying</td>
                                <td>New Applications</td>
                                <td>Interviewing</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="candidate">Engineer</span></td>
                                <td><span class="new-application candidate">36 Candidates</span></td>
                                <td><span class="interviewing"></span></td>
                            </tr>
                            <tr>
                                <td>UI designer</td>
                                <td><span class="new-application candidate">36 Candidates</span></td>
                                <td><span class="interviewing"></span></td>
                            </tr>
                            <tr>
                                <td>Manager</td>
                                <td><span class="new-application candidate">36 Candidates</span></td>
                                <td><span class="interviewing candidate">36 Candidates</span></td>
                            </tr>
                            <tr>
                                <td>Manager</td>
                                <td><span class="new-application candidate">36 Candidates</span></td>
                                <td><span class="interviewing candidate">36 Candidates</span></td>
                            </tr>
                            <tr>
                                <td>Manager</td>
                                <td><span class="new-application candidate">36 Candidates</span></td>
                                <td><span class="interviewing candidate">36 Candidates</span></td>
                            </tr>
                            <tr>
                                <td>UI designer</td>
                                <td><span class="new-application candidate">36 Candidates</span></td>
                                <td><span class="interviewing"></span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="employees">
                    <div class="cardheader">
                        <h2>Employees</h2>
                        <a href="/#" class="btn">View All</a>
                    </div>
                    <table>
                        <tr>
                            <td><h4>KX</h4><br/><span>Total Members 12</span></td>
                            <td width="60px"><div class="imgBx"><img src="/img/user1.png" alt='User'/></div></td>
                        </tr>
                        <tr>
                            <td><h4>SE</h4><br/><span>Total Members 12</span></td>
                            <td width="60px"><div class="imgBx"><img src="/img/user2.png" alt='User'/></div></td>
                        </tr>
                        <tr>
                            <td><h4>KX</h4><br/><span>Total Members 12</span></td>
                            <td width="60px"><div class="imgBx"><img src="/img/user1.png" alt='User'/></div></td>
                        </tr>
                        <tr>
                            <td><h4>AN</h4><br/><span>Total Members 12</span></td>
                            <td width="60px"><div class="imgBx"><img src="/img/user2.png" alt='User'/></div></td>
                        </tr>
                        <tr>
                            <td><h4>SE</h4><br/><span>Total Members 12</span></td>
                            <td width="60px"><div class="imgBx"><img src="/img/user2.png" alt='User'/></div></td>
                        </tr>
                    </table>
                </div>
            </div>

            
        </div>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        
        <script src="https://cdn.jsdelivr.net/npm/chart.js@4.1.0/dist/chart.umd.min.js"></script>
        <script src="my_chart.js"></script>
        <script>

        </script>
    </div>
  );
}

export default Dashboard;