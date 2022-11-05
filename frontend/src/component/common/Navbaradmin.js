import React from 'react'
import { useNavigation } from "react-router-dom";
import logo from "./logo.png";

export const Navbaradmin = () => {
    function logout() {
        localStorage.removeItem("user");
        window.location = "/admin";
      }
  return (
    <div>
          <nav
        class="navbar navbar-expand-lg text-light"
        style={{ backgroundColor: "#00004D" }}
      >
        {/* <a class="navbar-brand text-light"   href="#">Navbar</a> */}
        <img src={logo} style={{ width: "10%", height: "10%" }} />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-right"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ">
           
            <li class="nav-item mx-5">
              <span className="btn" onClick={logout}>
                <i className="fa fa-sign-in me-1"></i> Exit
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
