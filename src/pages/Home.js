import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@mui/icons-material';
import { gsap } from 'gsap';
import Typewriter from 'typewriter-effect';

import selfPc from "../images/WhatsApp Image 2023-12-08 at 6.08.18 AM.jpeg";
import "./Home.css";

const Home = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    gsap.from(homeRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    })
    gsap.to(homeRef.current, {
      opacity: 1,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section  ref={homeRef} className='home section grid' >
      <img src={selfPc} alt='profile-photo' className='home_img' />
      <div className='home_content'>
        <div className='home_data'>
          <h1 className='home_title'>
            <span>I am Syed Haider Ali</span>{" "}
            <Typewriter
              options={{
                strings: ['Frontend Developer', 'React.js Enthusiast', 'UI/UX Lover'],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50
              }}
            />
          </h1>
          <p className='home_description'>
            I'm a Graduate Software Engineering student at the University of Karachi (UBIT), passionate about building modern and scalable web applications. With hands-on experience in <strong>React.js, Next.js, and React Native</strong>, I specialize in creating user-friendly and high-performance interfaces.

            Currently, I'm working as a <strong>Frontend Developer at 360XpertSolutions</strong>, where I collaborate with backend developers, SQA teams, and designers to build responsive and optimized web and mobile applications. I also have <strong>freelance experience</strong>, having developed a <strong>TypeScript-based Tradymate CMS platform</strong> for trading professional services.

            My tech stack includes <strong>MERN (MongoDB, Express.js, React.js, Node.js), Redux Toolkit, Tanstack Query, Tailwind CSS, Firebase, SQL, and Fastify</strong>. I'm always eager to learn and stay updated with the latest trends in web development.
          </p>

          <Link to="/about" className='btn'>
            More About Me <span className='btn_icon'><ArrowRight /></span>
          </Link>
        </div>
      </div>
      <div className="color_block"></div>
    </section>
  );
};

export default Home;
