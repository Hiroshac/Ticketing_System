import {React, useEffect, useState} from 'react'
import axios from 'axios'
import { SideNav } from '../SideNav'

export const ViewInvalidToken = () => {

  const [data, setData] = useState([])

  const loadData = () => {
    axios.get('http://localhost:5000/invalidtoken/get').then((res) => {
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
            <div className='col' style={{  width: '70%' }}>
                  <h3 className='navi'>Invalid Tokens</h3>
                  <table class='table'>
                    <thead>
                      <tr>
                        <th scope='col'> Insepector Id</th>
                        <th scope='col'>Date</th>
                        <th scope='col'>Count</th>
                        <th scope='col'>Route</th>
                        <th scope='col'>Reason</th>

                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row) => {
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
