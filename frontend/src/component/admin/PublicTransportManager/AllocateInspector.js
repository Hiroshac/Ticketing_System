import {React, useState, useEffect} from 'react'
import axios from 'axios';
import { SideNav } from '../SideNav';
import Swal from 'sweetalert2'
import { Navbaradmin } from '../../common/Navbaradmin';


export const AllocateInspector = () => {

  async function SweatAlert(text, item) {
    Swal.fire({
    icon: item,
    text: text,
    })
}


  const [data, setData] = useState([]);

  const loadData = () => {
    axios.get('http://localhost:5000/timetable/get').then((res) => {
      setData(res.data)
    })
  }

  const [inspectorid, setInspectorid] = useState('');
  const [date, setDate] = useState('');
  const [route, setRoute] = useState('');

  const inspector = {inspectorid, date, route}

  const allocate = async (e) => {
    e.preventDefault();
    try {
      if ((inspectorid == '' ) || (date == '' ) || (route == '' ) ) 
      {
        SweatAlert('Please fill the required fields.', 'warning')
      }
      else if ((inspectorid == '' ) && (date == '' ) (route == '' ) ) 
      {
        SweatAlert('Please fill the required fields.', 'warning')
      }
       else 
      {
              
        axios.post('http://localhost:5000/allocate/add', inspector);
        SweatAlert('Successfully insereted', 'success')
        alert('success');
        // navigate('/getinvalidtokens')
      }
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
}
const [token, setToken] = useState([])

const loadtoken = () => {
  axios.get('http://localhost:5000/invalidtoken/get').then((res) => {
    setToken(res.data)
  })
}

useEffect(() => {
  loadData()
  loadtoken()
}, [])

    return (
      <div>
        <Navbaradmin/>
        <div className='row ' style={{width:"100%"}}>
            <div className='col-sm-2' style={{ backgroundColor: "#00004D"}}>
              <SideNav/>
            </div>
            <div className='col-sm-3' style={{marginTop:"5%"}}>
                          <div className='border shadow rounded-3 bg-light'>
                              <form onSubmit={allocate} className='mx-5 mt-5 mb-5'>
                                    <div class="form-group">
                                      <label>Allocated inspector Name</label>
                                      <input class="form-control" onChange={(e)=>setInspectorid(e.target.value)} />
                                    </div>
                                    <div class="form-group">
                                      <label>Allocated Date </label>
                                      <input type = "date" class="form-control" onChange={(e)=>setDate(e.target.value)} />
                                    </div> 
                                    <div class="form-group">
                                      <label>Allocate Route</label> 
                                        <select class="form-control" onChange={(e)=>setRoute(e.target.value)}>
                                              {data.map((r)=>{
                                                return(
                                                  <option>{r.orgin} to {r.destination} from {r.starttime} - {r.endtime}</option>
                                                )
                                              })}
                                        </select>
                                    </div>
                                    <div align="center">
                                       <button type="submit" class="btn btn-primary mt-5 ">Submit</button>
                                    </div>  
                              </form>
                          </div>
            </div>
            <div className='col' style={{ width: '70%', marginTop:"5%"}}>
                  <h3 className='navi'> Invalid Tokens</h3>
                  <table class='table'>
                    <thead>
                      <tr>
                        <th scope='col'>Insepector ID</th>
                        <th scope='col'>Date</th>
                        <th scope='col'>Count</th> 
                        <th scope='col'>Route</th>       
                        <th scope='col'>Invalid Reason</th>      
                      </tr>
                    </thead>
                    <tbody>
                      {token.map((row) => {
                        return (
                          <tr>
                            <td>{row.inspectorid}</td>
                            <td>{row.date}</td>
                            <td>{row.count}</td>
                            <td>{row.route}</td>
                            <td>{row.reason}</td>
                            <td>
                              {/* <Link to={`/editstrm/${row._id}`}>
                                <button class='btn btn-primary'>Update</button>
                              </Link> */}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
            </div>        
        </div>
      </div>
    )
}
