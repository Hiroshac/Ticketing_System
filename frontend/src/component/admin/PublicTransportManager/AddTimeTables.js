import {React, useState, useEffect} from 'react'
import { SideNav } from '../SideNav'
import axios from 'axios'

export const AddTimeTables = () => {

    const [orgin, setOrgin] = useState('');
    const [destination, setDestination] = useState('');
    const [starttime, setStarttime] = useState('');
    const [endtime, setEndtime] = useState('');

    const table = {orgin, destination, starttime, endtime}

    const addTable = async (e) => {
    e.preventDefault();
    try {
      if ((orgin == '' ) || (destination == '' ) || (starttime == '' || (endtime =='') ) ) 
      {
        // SweatAlert('Please fill the required fields.', 'warning')
      }
      else if((orgin == '' ) || (destination == '' ) || (starttime == '' || (endtime ==''))) 
      {
        // SweatAlert('Please fill the required fields.', 'warning')
      }
      else 
      {
        axios.post('http://localhost:5000/timetable/add', table);
        // SweatAlert('Successfully insereted', 'success')
        alert('success');
        // navigate('/getinvalidtokens')
      }
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }

    }
    

  const [data, setData] = useState([])

  const loadData = () => {
    axios.get('http://localhost:5000/timetable/get').then((res) => {
      setData(res.data)
    })
  }

  useEffect(() => {
    loadData()
  }, [])


  return (
  <div>
    <div className='row ' style={{width:"100%"}}>
        <div className='col-sm-2' style={{ backgroundColor: "#00004D"}}>
          <SideNav/>
        </div>
        <div className='col-sm-3' style={{marginTop:"5%"}}>
                      <div className='border shadow rounded-3 bg-light'>
                          <form onSubmit={addTable} className='mx-5 mt-5 mb-5'>
                                <div class="form-group">
                                  <label>Orgin</label>
                                  <input class="form-control" onChange={(e)=>setOrgin(e.target.value)} />
                                </div>
                                <div class="form-group">
                                  <label>Destination</label>
                                  <input class="form-control" onChange={(e)=>setDestination(e.target.value)} />
                                </div> 
                                <div class="form-group">
                                  <label>Start Time</label>
                                  <input  type="time" class="form-control" onChange={(e)=>setStarttime(e.target.value)}/>
                                </div>  
                                <div class="form-group">
                                  <label>End Time</label>
                                  <input  type="time" class="form-control" onChange={(e)=>setEndtime(e.target.value)}/>
                                </div>  
                                <div align="center">
                                  <button type="submit" class="btn btn-primary mt-5 ">Submit</button>
                                </div>
                          </form>
                      </div>
         </div>
        <div className='col' style={{ width: '70%', marginTop:"5%"}}>
                  <h3 className='navi'> Time Tables</h3>
                  <table class='table'>
                    <thead>
                      <tr>
                        <th scope='col'> Orgin</th>
                        <th scope='col'>Destination</th>
                        <th scope='col'>Start Time</th>    
                        <th scope='col'>End Time</th>      
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row) => {
                        return (
                          <tr>
                            <td>{row.orgin}</td>
                            <td>{row.destination}</td>
                            <td>{row.starttime}</td>
                            <td>{row.endtime}</td>
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
