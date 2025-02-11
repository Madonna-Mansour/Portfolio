import me from '../assets/me.png'
import cv from '../assets/Madonna.pdf'
import { CiSaveDown2 } from "react-icons/ci";



const Hero = () => {
  return (
    <div>
        <div className="">
            <h1>Hello! I’m <br /> Madonna Mansour</h1>
             <p>Front End Developer</p>
            <button   to="ContactPage" className='butt'>
                 <div className="">
                      <a href={cv} download='cv' className='text-white' style={{textDecoration:"none"}} >Download CV 
                      <CiSaveDown2 />                      </a>    
                     </div> 
             </button>
        </div>
        <div className="">
        <img  src={me} alt="me"/>
        </div>
       
    </div>
  )
}

export default Hero
