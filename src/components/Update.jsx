import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateEmployee } from '../redux/slice';
import { Col, Container, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';


function Update() {

    const dispatch = useDispatch()
   

    const navigate = useNavigate()
    const { id } = useParams();

    const data = useSelector((state) => state.employee);
    const existingUser = data.filter(f => f.id === id);
    const { name, from,to,contactNo,esAmount,date,time } = existingUser[0];

    const [uid, setId] = useState(id);
    const [uname, setName] = useState(name);
    const [uFrom, setFrom] = useState(from);
    const [uTo, setTo] = useState(to);
    const [uContactNo, setContactNo] = useState(contactNo);
    const [uEsAmount, setEsAmount] = useState(esAmount);
    const [uDate,setDate] = useState(date);
    const [uTime,setTime] = useState(time);

    const handleUpdate = () => {
        
        dispatch((updateEmployee({
            id: uid,
            name: uname,
            from:uFrom,
            to:uTo,
            contactNo:uContactNo,
            esAmount:uEsAmount,
            date:uDate,
            time:uTime
        })))
        navigate('/')
        
    }
   

    return (
        <div>
            

<div className="row"   >
          <div className="col-m-12 " >

          <form onSubmit={handleUpdate}>
          <div className="container  p-5 border shadow "   >
            <h2><b>UPDATE TRIP DETAILS</b></h2>

           
        
        <MDBInput value={id} onChange={(e) => setId(e.target.value)} type="number" label=" Id" className='mb-3' />
        <MDBInput value={uname} onChange={(e) => setName(e.target.value)} type="text" label='Cordinator Name'  className='mb-3'  />
       
        
        
        <MDBInput value={uFrom} onChange={(e) => setFrom(e.target.value)} type="text" label='Pickup ' className='mb-3'   />
        <MDBInput value={uTo} onChange={(e) => setTo(e.target.value)} type="text" label='Destination' className='mb-3'   />
       
       
        <MDBInput value={uDate} onChange={(e) => setDate(e.target.value)} type="date" label='Date' className='mb-3' />
        <MDBInput value={uTime} onChange={(e) => setTime(e.target.value)} type="time" label='Time' className='mb-3' />
        <MDBInput value={uEsAmount} onChange={(e) => setEsAmount(e.target.value)}  type="number" label='Estimated amount' className='mb-3' />
        <MDBInput value={uContactNo} onChange={(e) => setContactNo(e.target.value)} type="number" label='Contact no' className='mb-3' />
       
        
        <MDBBtn color='danger'className='mt-3'  >Update Trip Details</MDBBtn>
        
       
        </div>
         
         </form>
         

          </div>
         </div>
            
           
        </div>
    );
}

export default Update;
