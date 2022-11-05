import React from 'react'
import logo from "./logo.png";


export const Navbarhome = () => {
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
        
      </nav>
        
    </div>
  )
}
