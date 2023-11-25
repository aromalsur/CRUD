import React, { useEffect, useState } from 'react'
import {
    MDBInputGroup,
    MDBInput,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { AddEmployee } from '../redux/slice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function AddData() {

    const navigate = useNavigate()

    const dispatch = useDispatch()


    const [id,setId] = useState('')
    const [name,setName] = useState('')
    const [contactNo,setContactNo] = useState('')
    const [from,setFrom] = useState('')
    const [to,setTo] = useState('')
    const [esAmount,setEsAmount] = useState('')
    const [date,setDate] = useState('')
    const [time,setTime] = useState('')
    const AddData = () => {
        const body = {
            id,
            name,
            contactNo,
            from,
            to,
            esAmount,
            date,
            time
        }
       

        dispatch(AddEmployee(body))
        toast("Trip details  added successfully")
    }

    useEffect(() => {
        
    },[])

  return (
    
    <div >
      <ToastContainer />
      
        
          
         <div className="row mt-5"   >
          <div className="col-m-12 " style={{backgroundColor:'rgba(255, 255, 255, 0.132)'}} >
          <div className="container  p-5 border shadow "    >
            <h3 style={{fontFamily:'monospace'}}><b>ADD TRIP DETAILS</b></h3>
        
        <MDBInput onChange={(e) => setId(e.target.value)} type="number" label=" ID" className='mb-3' />
        <MDBInput onChange={(e) => setName(e.target.value)} type="text" label='Cordinator Name'  className='mb-3'  />
       
        
        
        <MDBInput onChange={(e) => setFrom(e.target.value)} type="text" label='Pickup ' className='mb-3'   />
        <MDBInput onChange={(e) => setTo(e.target.value)} type="text" label='Destination' className='mb-3'   />
       
       
        <MDBInput onChange={(e) => setDate(e.target.value)} type="date" label='Date' className='mb-3' />
        <MDBInput onChange={(e) => setTime(e.target.value)} type="time" label='Time' className='mb-3' />
        <MDBInput onChange={(e) => setEsAmount(e.target.value)} type="number" label='Estimated amount' className='mb-3' />
        <MDBInput onChange={(e) => setContactNo(e.target.value)} type="number" label='Contact no' className='mb-3' />
       
        
        <MDBBtn color='danger'className='mt-3' onClick={() => AddData()}>Add Trip Details</MDBBtn>
        
       
        </div>

          </div>
         </div>
           
                
          


            </div>
            
      



   
  )
}

export default AddData