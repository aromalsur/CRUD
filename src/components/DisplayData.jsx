import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteEmployee } from '../redux/slice';
import { useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';


function DisplayData() {

  

    const data = useSelector((state) => state.employee)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    

    
  return (
    <div>
      <Container className='mt-5 mb-5'>
      <h3 style={{fontFamily:'monospace'}}> <b>ALL TRIP DETAILS</b></h3>
      <Row sm={12} md={4} lg={4} style={{display:'flex', flexDirection:'row',alignItems:'center', justifyContent:'center'}}>


     
      
       {
        data.length > 0 ? data.map((item) => (
          

          
          
            <div>
              <Col className='text-center mt-5' >
            <Card style={{ width: '20rem',display:'flex', justifyContent:'space-around' }} className='border shadow '>
      {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
      <Card.Body style={{display:'flex', justifyContent:'flex-end', alignItems:'center' }}>
        <Card.Title><i class="fa-solid fa-id-card" style={{color:'red'}}></i> : {item.id}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        
        <ListGroup.Item style={{display:'flex', justifyContent:'left', alignItems:'center', gap:'1rem' }}> <i class="fa-regular fa-user"></i> : {item.name}</ListGroup.Item>
        <ListGroup.Item style={{display:'flex', justifyContent:'left', alignItems:'center', gap:'1rem' }} > <i class="fa-solid fa-location-dot"></i> : {item.from} <i class="fa-solid fa-arrow-right f"> </i> <i class="fa-solid fa-location-dot"></i> {item.to}</ListGroup.Item>
        <ListGroup.Item style={{display:'flex', justifyContent:'left', alignItems:'center', gap:'1rem' }}><i class="fa-regular fa-calendar"></i>:{item.date}</ListGroup.Item>
        <ListGroup.Item style={{display:'flex', justifyContent:'left', alignItems:'center', gap:'1rem'}}> <i class="fa-solid fa-clock" style={{color:'grey'}}></i> : {item.time}</ListGroup.Item>
        <ListGroup.Item style={{display:'flex', justifyContent:'left', alignItems:'center', gap:'1rem' }}><i class="fa-solid fa-wallet" ></i> : {item.esAmount} Rs</ListGroup.Item>
        <ListGroup.Item style={{display:'flex', justifyContent:'left', alignItems:'center', gap:'1rem' }}><i class="fa-solid fa-phone " style={{color:'green'}}></i> : {item.contactNo}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        
        <Button  onClick={() => navigate(`/update/${item.id}`)} variant="outline-info" clas ><i class="fa-solid fa-pen-to-square"></i> Update</Button>
        <Button  onClick={() => dispatch(DeleteEmployee(item.id))} variant="outline-danger"  className='ms-5'><i class="fa-solid fa-trash"></i>  Delete</Button>
      </Card.Body>
    </Card>
            
            
            </Col>
            </div>
        
        )):
        
        <div style={{width:'25rem'}} >

          <img src="https://www.pngmart.com/files/17/Travel-PNG-Pic.png" alt="" style={{width:'20rem'}} />

            <h3 style={{fontFamily:'monospace'}}>No trip records found</h3>
        </div>
        
       }
        </Row>

</Container>
    </div>
  )
}

export default DisplayData