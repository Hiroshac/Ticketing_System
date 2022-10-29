import React from "react";

export const SideNav = () => {
  return (
    <div>
      <div
        className=""
        style={{ heihgt:"100%", backgroundColor: "#00004D", }}
      >
        <div className="" style={{padding:"5%"}}>
          <button className="btn" style={{width:"90%",margin:"5%"}}>Add Invalid Tokens</button>
          <button className="btn" style={{width:"90%",margin:"5%"}}>Invalid Token Reports</button>
        </div>
      </div>
      {/* <div style={{width:"12%", marginTop:"5%", backgroundColor:"#00004D"}}>
                    <nav class="navbar navbar-expand-lg text-light" >
                          <div style={{ marginTop:"15%", height:"100%"}}>
                            <a href="addsubject" class="nav-link text-light" aria-current="true">
                              <i class="fas fa-chart-area fa-fw me-3"></i><span>Add Invalid Tokens</span>
                            </a>
                            <br></br><br></br>
                            <a href="addstream" class="nav-link text-light">
                              <i class="fas fa-chart-area fa-fw me-3"></i><span>Invalid Token Reports</span>
                            </a>
                            <br></br><br></br>                                         */}
      {/* </div>
                      </nav>
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>          
            </div> */}
    </div>
  );
};
