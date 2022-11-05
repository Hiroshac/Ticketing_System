import React from "react";
import { useNavigation } from "react-router-dom";
import logo from "./logo.png";

export const NavBar = () => {

  function logout() {
    localStorage.removeItem("user");
    window.location = "/";
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
          class="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav justify-content-center ">
          <li class="nav-item mx-5">
              <a class="nav-link text-light" href="localdash">
                Home
              </a>
            </li>
            <li class="nav-item mx-5">
              <a class="nav-link text-light" href="gettable">
                Time Table
              </a>
            </li>
            <li class="nav-item mx-5">
              <a class="nav-link text-light" href="addcredit">
                Add Credit
              </a>
            </li>
            <li class="nav-item mx-5">
              <span className="btn" onClick={logout}>
                <i className="fa fa-sign-in me-1"></i> Exit
              </span>
            </li>
            {/* <button>
        logout
      </button> */}
            {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};
