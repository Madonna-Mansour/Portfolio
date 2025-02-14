import React from 'react'
import {Col ,Row , Container} from 'react-bootstrap'
import Developer from '../imges/deve.webp'



const Servieses = () => {
  return (
    <div>
        <Container fluid className='servise'>
            <Row>
                <Col  lg={6} className='py-5'> 
                    <h3 style={{fontSize:"25px" , color:"gray"}}>||  My Services</h3>
                    <h1 style={{fontSize:"45px" }}>Service Provide For My Clients.</h1>
                </Col>
            </Row>
            <Row  className='d-card'>
                <Col  lg={12} className='text-center my-5'> 
                       <img style={{height:"50px", width:"50px"}} src={Developer} alt="" />
                       <h1 style={{fontSize:"40px" ,marginTop:"50px", marginBottom:"20px"}}>Development</h1>
                </Col>               
            </Row>
            <Row>
              <Col lg={12} className='p-serv  my-5  '>  
                <Row>  
                   <Col lg={4} md={6}>
                         <p> HTML</p>
                    </Col>

                    <Col lg={4} md={6}>
                        <p>CSS</p>
                    </Col>

                    <Col lg={4} md={6}>
                        <p>Java Script</p>
                    </Col>

                    <Col lg={4} md={6}>
                       <p>React js</p>
                    </Col>

                    <Col lg={4} md={6}>
                        <p>Bootstrap</p>
                    </Col>

                    <Col lg={4} md={6}>
                        <p>Responsive Design</p>
                    </Col>

                    <Col lg={4} md={6}>
                        <p>Vite</p>
                    </Col> 

                    <Col lg={4} md={6}>
                        <p>Tailwind</p>
                    </Col>

                 </Row> 
              </Col>
          </Row>
        </Container>
          
    </div>
  )
}

export default Servieses
