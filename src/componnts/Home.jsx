import React from 'react'
import {Col ,Row , Container} from 'react-bootstrap'
import download from '../imges/download.png'
import me from '../imges/me.png'
import cv from '../componnts/cv.pdf'

const Home = () => {
  return (
        <Container fluid className='hero-section '>
           <Row className='d-flex align-items-center justify-content-center'>
             <Col lg={6} sm={6}  xs={6}  className='px-5'>
                 <h1  className='py-3' style={{fontSize:"50px" }}>Hello! I’m <br /> Madonna Mansour</h1>
                 <p style={{ color:"gray" }} >Front End Developer</p>
                 <button  variant="success" to="ContactPage" className='butt'>
                    <div >
                      <a href={cv} download='cv Madonna' className='text-white' style={{textDecoration:"none"}} >Download CV 
                      < img   style={{height:"30px", marginLeft:"20px"}} src={download} alt="" />
                      </a>    
                     </div> 
                 </button>
             </Col>
             <Col lg={6} sm={12} xs={12} className='img-hero'>
                  <img  src={me} alt=""  />
             </Col>
           </Row>
        </Container> 
  )
}
// style={{height:"100%"}}
export default Home
