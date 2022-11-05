import { useState, React, useEffect} from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { SideNav } from '../../admin/SideNav';

export const AddCredit = () => {

    async function SweatAlert(text, item) {
        Swal.fire({
          icon: item,
          text: text,
        })
      }
  
    const [method, setMethod] = useState('');
    const [amount, setAmount] = useState('');
    const [cardno, setCardno] = useState('');
    const [cvv, setCvv] = useState('');
    const [expire, setExpire] = useState('');

    const credit = {method, amount, cardno, cvv, expire}

    const addCredit = async (e) => {
    e.preventDefault();
    try {
      if ((method == '' ) || (amount == '' ) || (cardno == '' ) || (cvv == '' ) || (expire == '' )) 
      {
        SweatAlert('Please fill the required fields.', 'warning')
      }
      if ((method == '' ) || (amount == '' ) || (cardno == '' ) || (cvv == '' ) || (expire == '' )) 
      {
        SweatAlert('Please fill the required fields.', 'warning')
      }
       else 
      {
        axios.post('http://localhost:5000/credit/add', credit);
        SweatAlert('Credit added successfully', 'success')
        // navigate('/getinvalidtokens')
      }
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }

  return (
    <div>
            <div className='row ' style={{width:"100%"}}>
            <div className='col'>
              <form className='' onSubmit={addCredit}>
                    <div style={{width:"90%", marginTop:"5%",marginLeft:"5%"}}>
                    <div className='border shadow rounded-3 bg-light p-2'>
                    <h3 className='text-center mb-4'> Add Credit</h3>
                    <div class="form-group row">
                                <label  class="col-sm-2 col-form-label">Payment Method</label>
                                <div class="col-sm-10">
                                <input type="password" class="form-control"  onChange={(e)=>setMethod(e.target.value)}/>
                                </div>
                            </div>
                            <br></br>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Date</label>
                                <div class="col-sm-10">
                                <input type="date" class="form-control"  onChange={(e)=>setAmount(e.target.value)}  />
                                </div>
                            </div>
                            <br></br>
                            <div class="form-group row">
                                <label  class="col-sm-2 col-form-label">Invalid Token Count</label>
                                <div class="col-sm-10">
                                <input class = "form-control text-box single-line inputNumeric" type="number"  onChange={(e)=>setCardno(e.target.value)}/>
                                </div>
                            </div>
                            <br></br>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Route</label>
                                <div class="col-sm-10">
                                <input class = "form-control text-box single-line inputNumeric" type="number"  onChange={(e)=>setCvv(e.target.value)}/>
                                </div>
                                
                            </div>
                            <br></br>
                            <div class="form-group row">
                                <label  class="col-sm-2 col-form-label">Invalid Reason</label>
                                <div class="col-sm-10">
                                <input type="date" class="form-control" onChange={(e)=>setExpire(e.target.value)}/>
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
