import React from "react";
import "./ContactUs.css";

function ContactUs() {

    // let toggle = document.querySelector(".toggle");
    // let navigation = document.querySelector(".navigation");
    // let main = document.querySelector(".main");

    // toggle.onclick = function () {
    //   navigation.classList.toggle("active");
    //   main.classList.toggle("active");
    // };

    // let list = document.querySelectorAll(".navigation li");
    // function activelink() {
    //   list.forEach((item) => item.classList.remove("hovered"));
    //   this.classList.add("hovered");
    // }
    // list.forEach((item) => item.addEventListener("mouseover", activelink));

    // let subMenu = document.getElementById("subMenu");

    // function toggleMenu() {
    //   subMenu.classList.toggle("open-menu");
    // }

  return (
    <div>
      <div class="container">
        <div class="navigation">
          <ul>
            <li>
              <a href="/#">
                <img
                 style={{width:"200px"}} 
                  alt="Meu Labs Logo"
                  src="/img/meu_labs_logo1.png"
                />
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
              <input type="text" placeholder="Search here" />
              <ion-icon name="search-outline"></ion-icon>
            </label>
          </div>

          <img
            class="user"
            src="/img/user.png"
            onclick="toggleMenu()"
            alt="User"
          />

          <div class="sub-menu-wrap" id="subMenu">
            <div class="sub-menu">
              <div class="user-info">
                <img alt="User" src="/img/user.png" />
                <h3>Shayen Yatagama</h3>
              </div>
              <hr />

              <a href="/#" class="sub-menu-link">
                <images>
                  <ion-icon name="person-circle-outline"></ion-icon>
                </images>
                <p>Profile</p>
                <span>
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </span>
              </a>
              <a href="/#" class="sub-menu-link">
                <images>
                  <ion-icon name="create-outline"></ion-icon>
                </images>
                <p>Edit Profile</p>
                <span>
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </span>
              </a>
              <a href="/#" class="sub-menu-link">
                <images>
                  <ion-icon name="settings-outline"></ion-icon>
                </images>
                <p>Settings</p>
                <span>
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </span>
              </a>
              <a href="/#" class="sub-menu-link">
                <images>
                  <ion-icon name="information-circle-outline"></ion-icon>
                </images>
                <p>Help & Support</p>
                <span>
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </span>
              </a>
              <a href="/#" class="sub-menu-link">
                <images>
                  <ion-icon name="log-out-outline"></ion-icon>
                </images>
                <p>Log out</p>
                <span>
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </span>
              </a>
            </div>
          </div>
        </div>

        <section id="contact">
          <div class="contact-box">
            <div class="contact-links">
              <h2>CONTACT</h2>
              <div class="links">
                <div class="link">
                  <a href="/#">
                    <img
                      src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                      alt="linkedin"
                    />
                  </a>
                </div>

                <div class="link">
                    <a href="/#">
                        <img
                        src="https://i.postimg.cc/YCV2QBJg/github.png"
                        alt="github"/>
                    </a>
                </div>
                
                <div class="link">
                  <a href="/#">
                    <img
                      src="https://i.postimg.cc/W4Znvrry/codepen.png"
                      alt="codepen"
                    />
                  </a>
                </div>

                <div class="link">
                  <a href="/#">
                    <img
                      src="https://i.postimg.cc/NjLfyjPB/email.png"
                      alt="email"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div class="contact-form-wrapper">
              <form>
                <div class="form-item">
                  <input type="text" name="sender" required />
                  <label>Name:</label>
                </div>
                <div class="form-item">
                  <input type="text" name="email" required />
                  <label>Email:</label>
                </div>
                <div class="form-item">
                  <textarea class="" name="message" required></textarea>
                  <label>Message:</label>
                </div>
                <button class="submit-btn">Send</button>
              </form>
            </div>
          </div>
        </section>
      </div>

      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
}

export default ContactUs;
