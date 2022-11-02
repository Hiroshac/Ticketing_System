import {React, useState, useEffect} from 'react'
import axios from 'axios'
import { SideNav } from '../SideNav';

export const AddPublicManager = () => {
    
        const [managerid, setManagerid] = useState('');
        const [name, setName] = useState('');

        const manager = {managerid, name}

        const AddManager = async (e) => {
        e.preventDefault();
        try {
        if ((name == '' ) || (managerid == '' )  ) 
        {
            // SweatAlert('Please fill the required fields.', 'warning')
        }
        else if((name == '' ) || (managerid == '' )) 
        {
            // SweatAlert('Please fill the required fields.', 'warning')
        }
        else 
        {
            axios.post('http://localhost:5000/manager/add', manager);
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
        axios.get('http://localhost:5000/manager/get').then((res) => {
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
                            <form onSubmit={AddManager} className='mx-5 mt-5 mb-5'>
                                    <div class="form-group">
                                    <label>Inspector ID</label>
                                    <input class="form-control" onChange={(e)=>setManagerid(e.target.value)} />
                                    </div>
                                    <div class="form-group">
                                    <label>Name</label>
                                    <input class="form-control" onChange={(e)=>setName(e.target.value)} />
                                    </div> 
                                    <div align="center">
                                    <button type="submit" class="btn btn-primary mt-5 ">Submit</button>
                                    </div>
                            </form>
                        </div>
            </div>
            <div className='col' style={{ width: '70%', marginTop:"5%"}}>
                    <h3 className='navi'> Public Managers</h3>
                    <table class='table'>
                        <thead>
                        <tr>
                            <th scope='col'> Manager ID</th>
                            <th scope='col'>Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((row) => {
                            return (
                            <tr>
                                <td>{row.managerid}</td>
                                <td>{row.name}</td>
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
