import React from 'react'
import {Col ,Row , Container} from 'react-bootstrap'
import botiga from '../imges/botiga.png';
import criativo from '../imges/criativo.png';
import fior from '../imges/fior.png';
import khamsat from '../imges/khamsat.png';
import land from '../imges/rosa-land.png'
import time from '../imges/time zone.png'
import home from '../imges/new.png'
import rossa from '../imges/rossa3.jpg'



const Projectssss = () => {
  return (
    <div>
        <Container fluid className='Projectssss px-5'>
            <Row>
                <Col lg={4} md={6}>
                   <a href="https://botiga-xi.vercel.app/">
                    <img src={botiga} alt="" />
                   </a>
                </Col>
                <Col lg={4} md={6}>
                   <a href="https://criativo-livid.vercel.app/">
                    <img src={criativo} alt="" />
                   </a>
                </Col>
                <Col lg={4} md={6}>
                   <a href="https://fiore-rho.vercel.app/">
                    <img src={fior} alt="" />
                   </a>
                </Col>
                <Col lg={4} md={6}>
                   <a href="https://cute-liger-d4aa79.netlify.app/">
                    <img src={khamsat} alt="" />
                   </a>
                </Col>
                <Col lg={4} md={6}>
                   <a href="https://rose-land.vercel.app/">
                    <img src={land} alt="" />
                   </a>
                </Col>
                <Col lg={4} md={6}>
                   <a href="https://time-zone-gamma.vercel.app/">
                    <img src={time} alt="" />
                   </a>
                </Col>
                <Col lg={4} md={6}>
                   <a href="https://new-home-six.vercel.app/">
                    <img src={home} alt="" />
                   </a>
                </Col>
                <Col lg={4} md={6}>
                   <a href="https://rosaa-virid.vercel.app/">
                    <img src={rossa} alt="" />
                   </a>
                </Col>
            </Row>

        </Container>
      
    </div>
  )
}

export default Projectssss
