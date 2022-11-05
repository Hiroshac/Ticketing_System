import { useState, React, useEffect} from 'react';
import axios from 'axios';
import { SideNav } from '../SideNav';
import Swal from "sweetalert2";

async function SweatAlert(text, item) {
  Swal.fire({
    icon: item,
    text: text,
  })
}
export const AddInvalidToken = () => {

    const [data, setData] = useState([]);

    const loadData = () => {
      axios.get('http://localhost:5000/timetable/get').then((res) => {
        setData(res.data)
      })
    }

    useEffect(() => {
      loadData()
    }, [])

    const [inspectorid, setInspectorid] = useState('');
    const [date, setDate] = useState('');
    const [count, setCount] = useState('');
    const [route, setRoute] = useState('');
    const [reason, setReason] = useState('');

    const token = {inspectorid, date, count, route, reason}

    const addToken = async (e) => {
    e.preventDefault();
    try {
      if ((inspectorid == '' ) || (date == '' ) || (count == '' ) || (route == '' ) || (reason == '' )) 
      {
        SweatAlert('Please fill the required fields.', 'warning')
      }
      else if ((inspectorid == '' ) && (date == '' ) && (count == '' ) && (route == '' ) && (reason == '' )) 
      {
        SweatAlert('Please fill the required fields.', 'warning')
      }
       else 
      {
        axios.post('http://localhost:5000/invalidtoken/add', token);
        SweatAlert('Successfully insereted', 'success')
        // navigate('/getinvalidtokens')
      }
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
    console.log(token)
  }

  return (
  <div>
      <div className='row ' style={{width:"100%"}}>
            <div className='col-sm-2' style={{ backgroundColor: "#00004D"}}>
              <SideNav/>
            </div>
            <div className='col'>
              <form className='' onSubmit={addToken}>
                    <div style={{width:"90%", marginTop:"5%",marginLeft:"5%"}}>
                    <div className='border shadow rounded-3 bg-light p-2'>
                    <h3 className='text-center mb-4'> Add About Invalid Token</h3>
                    <div class="form-group row">
                                <label  class="col-sm-2 col-form-label">Insepector ID</label>
                                <div class="col-sm-10">
                                <input type="password" class="form-control"  onChange={(e)=>setInspectorid(e.target.value)}/>
                                </div>
                            </div>
                            <br></br>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Date</label>
                                <div class="col-sm-10">
                                <input type="date" class="form-control"  onChange={(e)=>setDate(e.target.value)}  />
                                </div>
                            </div>
                            <br></br>
                            <div class="form-group row">
                                <label  class="col-sm-2 col-form-label">Invalid Token Count</label>
                                <div class="col-sm-10">
                                <input class = "form-control text-box single-line inputNumeric" type="number"  onChange={(e)=>setCount(e.target.value)}/>
                                </div>
                            </div>
                            <br></br>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Route</label>
                                  <select class="col-sm-10 form-control" onChange={(e)=>setRoute(e.target.value)}>
                                      {data.map((r)=>{
                                        return(
                                          <option  class="col-sm-10 form-control">{r.orgin} to {r.destination} from {r.starttime} - {r.endtime}</option>
                                        )
                                      })}
                                  </select>
                                
                            </div>
                            <br></br>
                            <div class="form-group row">
                                <label  class="col-sm-2 col-form-label">Invalid Reason</label>
                                <div class="col-sm-10">
                                <input class="form-control" onChange={(e)=>setReason(e.target.value)}/>
                                </div>
                            </div>
                            <div align="center">
                                    <button type="submit" class="btn btn-primary mt-5 ">Submit</button>
                            </div>
                    </div>
                    </div>
              </form>
            </div>    
      </div>
  </div>
  )
}