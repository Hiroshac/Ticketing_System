import React from "react";

export const SideNav = () => {
  return (
    <div>
      <div
        className=""
        style={{ heihgt:"100%", backgroundColor: "#00004D", }}
      >
        <div className="" style={{padding:"5%"}}>
          <button className="btn" style={{width:"100%",margin:"5%"}}>
          <a href="addinvalid" class="nav-link text-black" aria-current="true">
              <i class="fas fa-chart-area fa-fw me-3"></i><span>Add Invalid Tokens</span>
          </a>
          </button>
          <button className="btn" style={{width:"100%",margin:"5%"}}>
          <a href="getinvalid" class="nav-link text-black" aria-current="true">
              <i class="fas fa-chart-area fa-fw me-3"></i><span>Invalid Token Reports</span>
          </a>
          </button>
          <button className="btn" style={{width:"100%",margin:"5%"}}>
          <a href="addtable" class="nav-link text-black" aria-current="true">
              <i class="fas fa-chart-area fa-fw me-3"></i><span>Add Time Tables</span>
          </a>
          </button>
          <button className="btn" style={{width:"100%",margin:"5%"}}>
          <a href="allocate" class="nav-link text-black" aria-current="true">
              <i class="fas fa-chart-area fa-fw me-3"></i><span>Allocate Inspectors</span>
          </a>
          </button>
          <button className="btn" style={{width:"100%",margin:"5%"}}>
          <a href="manager" class="nav-link text-black" aria-current="true">
              <i class="fas fa-chart-area fa-fw me-3"></i><span>Add Public Transport Managers</span>
          </a>
          </button>
          <button className="btn" style={{width:"100%",margin:"5%"}}>
          <a href="inspector" class="nav-link text-black" aria-current="true">
              <i class="fas fa-chart-area fa-fw me-3"></i><span>Add Insepectors</span>
          </a>
          </button>
        </div>
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
};
