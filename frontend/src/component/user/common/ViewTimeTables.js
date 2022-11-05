import {React,  useState, useEffect } from "react"
import axios from "axios"
import { NavBar } from "../../common/NavBar";

export const ViewTimeTables = () => {
    
  const [data, setData] = useState([])

  const [routes, setRoutes] = useState([]);
  const [route, setRoute] = useState('');

  const root = {routes}

  const addRoute = async (e) => {
  e.preventDefault();
  setRoutes([...routes,route]);
      axios.post('http://localhost:5000/root/add', root);
      // SweatAlert('Successfully insereted', 'success')
      alert('success');
      // navigate('/getinvalidtokens')
}

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
      <NavBar/>
        <div className='row ' style={{width:"100%"}}>
        <div className='col-sm-3' style={{marginLeft:"40%", marginTop:"5%", width:"60%"}}>
                  <div className='border shadow rounded-3 bg-light'>
                    <form onSubmit={addRoute}>
                    <h4>Choose Route </h4>
                    <br></br>
                        {data.map((row) => {
                            return (
                                <div class="form-group">
                                    <label><input onChange={(e)=>setRoute(e.target.value)} type="checkbox"/>{row.orgin} to {row.destination} from {row.starttime} - {row.endtime}</label>
                                </div>
                            )
                        })}
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

