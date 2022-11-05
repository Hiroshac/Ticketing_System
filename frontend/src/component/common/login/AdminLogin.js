
import logo from '../logo.png';

import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { AuthContext } from '../../../context/AuthContext'
import { AuthContext } from '../../context/AuthContext'
import Swal from 'sweetalert2'

function AdminLogin(props) {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  })
  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  })

  //loging out of the system
  if (props.logout) {
    dispatch({ type: 'LOGOUT' })
    navigate('/login')
    // window.location = '/login'
  }

  const handleClick = async (e) => {
    e.preventDefault()
    if (
      credentials.email === undefined ||
      credentials.password === undefined ||
      credentials.email === '' ||
      credentials.password === ''
    ) {
      Swal.fire({
        icon: 'warning',
        title: 'Warning',
        text: 'Please fill all the details!!!',
      })
    } else {

        await axios
        .post('http://localhost:5000/auth/login', credentials)
        .then(res => {
            console.log(res.data.details)  
            const ldata =  res.data.details;             
            localStorage.setItem('user', JSON.stringify(ldata))
            {(res.data.details.type === 'SAdmin') ? (
              navigate('/sdash')
            ): (res.data.details.type === 'Inspector') ? (
              navigate('/getinvalid')
            ):(
              navigate('/addtable')
            )}
        })
    }
  }

 

  return (
    <div className='' style={{width:"70%",marginLeft:"15%"}}>
      <section className='vh-100'>
        <div className='container-fluid h-custom'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-md-9 col-lg-6 col-xl-5'>
              <img
                src={logo}
                className='img-fluid'
                alt='Sample image'
              />
            </div>
            <div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1'>
              <h2 className='text-center pt-5'>
                <b>Login</b>
              </h2>
              <div className='text-center pt-3'>
                <p className='text-danger'>
                  {error && <strong>{error.message}</strong>}
                </p>
              </div>
              <div className='form-outline mb-3'>
                <input
                  type='email'
                  id='email'
                  className='form-control form-control-lg mb-1'
                  placeholder='Enter a valid email address'
                  onChange={handleChange}
                  required
                />
                <label className='form-label' for='form3Example3'>
                  Email address
                </label>
              </div>
              <div className='form-outline mb-3'>
                <input
                  type='password'
                  id='password'
                  className='form-control form-control-lg mb-1'
                  placeholder='Enter password'
                  onChange={handleChange}
                  required
                />
                <label className='form-label' for='form3Example4'>
                  Password
                </label>
              </div>

              <div className='d-flex justify-content-between align-items-center'>
                <button
                  type='submit'
                  className='btn btn-primary px-4'
                  disabled={loading}
                  onClick={handleClick}
                >
                  Login
                </button>
                <a href='/forgotPassword' className='text-body'>
                  Forgot password?
                </a>
              </div>

              <div className='text-center text-lg-start mt-2 pt-2'>
                <p className='small fw-bold mt-2 pt-1 mb-0'>
                  Don't have an account?{' '}
                  <Link to='/regA' className='link-danger'>
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdminLogin

