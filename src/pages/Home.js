import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from '@mui/icons-material';
import selfPc from "../images/WhatsApp Image 2023-12-08 at 6.08.18 AM.jpeg"
import "./Home.css"
const Home = () => {
  return (
    <section className='home section grid'>
      <img src={selfPc} alt='profile-photo' className='home_img' />
      <div className='home_content'>
        <div className='home_data'>
          <h1 className='home_title'>
            <span>I am Syed Haider Ali</span> Frontend Developer
          </h1>
          <p className='home_description'>
            I'm a Graduate Software Engineering student at the University of Karachi (UBIT), passionate about building modern and scalable web applications. With hands-on experience in **React.js, Next.js, and React Native**, I specialize in creating user-friendly and high-performance interfaces.

            Currently, I'm working as a **Frontend Developer at 360XpertSolutions**, where I collaborate with backend developers, SQA teams, and designers to build responsive and optimized web and mobile applications. I also have **freelance experience**, having developed a **TypeScript-based Tradymate CMS platform** for trading professional services.

            My tech stack includes **MERN (MongoDB, Express.js, React.js, Node.js), Redux Toolkit, Tanstack Query, Tailwind CSS, Firebase, SQL, and Fastify**. I'm always eager to learn and stay updated with the latest trends in web development.
          </p>

          <Link to="/about" className='btn'>
            More About Me <span className='btn_icon'>
              <ArrowRight />
            </span>
          </Link>

        </div>
      </div>
      <div className="color_block"></div>
    </section>
  )
}

export default Home