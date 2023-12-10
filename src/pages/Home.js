import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from '@mui/icons-material';
import selfPc from "../images/WhatsApp Image 2023-12-08 at 6.08.18 AM.jpeg"
import "./Home.css"
const Home = () => {
  return (
<section className='home section grid'>
  <img src={selfPc} alt='profile-photo' className='home_img'/>
  <div className='home_content'>
    <div className='home_data'>
      <h1 className='home_title'>
        <span>I am Syed Haider Ali</span> Web Developer
      </h1>
      <p className='home_description'> 
      I'm a third-year university student studying Software Engineering at the University of Karachi. I'm into creating websites, and I've got the hang of making them work well on all devices using React.js. My focus is on the front-end part of websites, making them look good and user-friendly. Plus, I've finished a web development course covering the MERN stack (MongoDB, Express.js, React.js, Node.js). So, I'm all set to bring my skills to real-world projects and keep learning in the ever-changing world of web development.     </p>
      <Link to="/about" className='btn' >
        More About Me <span className='btn_icon'>
          <ArrowRight/>
        </span>
      </Link>
    </div>
  </div>
  <div className="color_block"></div>
</section>
    )
}

export default Home