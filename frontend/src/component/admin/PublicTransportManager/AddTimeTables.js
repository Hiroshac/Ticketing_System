import React from 'react'

export const AddTimeTables = () => {
  return (
    <div>
    <AdminNav/>
        <div style={{height:"100%",maxWidth:"100%", width:"100%", marginTop:"15%"}}>
              <div style={{width:"10%",float:"left",paddingLeft:"10%"}}>
                <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                    <div class="position-sticky">
                      <div style={{width:"50%", marginTop:"15%"}}>
                        <a href="addsubject" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                          <i class="fas fa-chart-area fa-fw me-3"></i><span>Add Subjects</span>
                        </a>
                        <a href="addstream" class="list-group-item list-group-item-action py-2 ripple active">
                          <i class="fas fa-chart-area fa-fw me-3"></i><span>Add Streams</span>
                        </a>
                        <a href="getsubject" class="list-group-item list-group-item-action py-2 ripple"><i
                            class="fas fa-lock fa-fw me-3"></i><span>View Subjects</span></a>
                        <a href="getstream" class="list-group-item list-group-item-action py-2 ripple"><i
                            class="fas fa-chart-line fa-fw me-3"></i><span>View Streams</span></a>         
                      </div>
                    </div>
                  </nav>
                </div>
                <div style={{float:"right",paddingRight:"30%", width:"70%"}}>
                      <div className='border shadow rounded-3 bg-light'>
                          <form onSubmit={addStream} className='mx-5 mt-5 mb-5'>
                              <h2 className='text-center mb-4'> Add Stream</h2>
                                <div class="form-group">
                                  <label>Enter the Stream</label>
                                  <input class="form-control" value={streamname} onChange={(e)=>setStreamname(e.target.value)} />
                                </div> 
                                <div align="center">
                                  <button type="submit" class="btn btn-primary mt-5 ">Submit</button>
                                </div>
                          </form>
                        </div>
                    </div>
        </div>
  </div>
  )
}
