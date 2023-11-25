import React from 'react'
import AddData from './AddData'
import DisplayData from './DisplayData'
import Header from './Header'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer';

function Main() {
  return (
    <div>
     
      

      <Row>
        <Col>
          <AddData/>
        </Col>
      
      </Row>

      <Row>
      <Col>
          <DisplayData/>
        </Col>
      </Row>


      
     
      

      
   
        
      
      </div>

   
  )
}

export default Main