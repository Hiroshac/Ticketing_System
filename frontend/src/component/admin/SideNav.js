import React from 'react'

export const SideNav = () => {
  return (
    <div>
            <div style={{width:"12%", float:"left", marginTop:"5%", backgroundColor:"#00004D"}}>
                    <nav class="navbar navbar-expand-lg text-light" >
                          <div style={{ marginTop:"15%", height:"100%"}}>
                            <a href="addsubject" class="nav-link text-light" aria-current="true">
                              <i class="fas fa-chart-area fa-fw me-3"></i><span>Add Invalid Tokens</span>
                            </a>
                            <br></br><br></br>
                            <a href="addstream" class="nav-link text-light">
                              <i class="fas fa-chart-area fa-fw me-3"></i><span>Invalid Token Reports</span>
                            </a>
                            <br></br><br></br>
                            {/* <a href="getsubject"class="nav-link text-light"><i
                                class="fas fa-lock fa-fw me-3"></i><span>View Subjects</span></a>
                            <br></br><br></br>
                            <a href="getstream" class="nav-link text-light"><i
                                class="fas fa-chart-line fa-fw me-3"></i><span>View Streams</span></a>                                            */}
                        </div>
                      </nav>
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>          
            </div>
    </div>
  )
}
