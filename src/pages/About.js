import React, { useEffect, useRef } from 'react';
import "./About.css";
import Info from '../components/Info';
import Stats from '../components/Stats';
import Cv from './Cv.pdf';
import { resume } from '../Data';
import { Download } from '@mui/icons-material';
import Skills from '../components/Skills';
import ResumeItem from '../components/ResumeItem';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const infoRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    // Personal Info Fade In + Stagger
    gsap.fromTo(
      infoRef.current.querySelectorAll(".info_item"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse", // fade out on scroll up
        },
      }
    );

    // Skills Section Stagger Scale + Fade In
    gsap.fromTo(
      skillsRef.current.querySelectorAll(".progress_box"),
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <main className='section container'>
      <section className='about'>
        <h2 className='section_title'>
          About <span>Me</span>
        </h2>
        <div className='about_container grid'>
          <div className='about_info' ref={infoRef}>
            <h3 className='section_subtitle'>Personal Information</h3>
            <ul className='info_list grid'>
              <Info />
            </ul>
            <a href={Cv} download='' className='btn'>
              Download CV <span className='btn_icon'><Download /></span>
            </a>
          </div>
          <div className='stats grid'>
            <Stats />
          </div>
        </div>
      </section>

      <div className='separator'></div>

      <section className="skills" ref={skillsRef}>
        <h3 className='section_subtitle subtitle_center'>My Skills</h3>
        <div className='skills_container grid'>
          <Skills />
        </div>
      </section>

      <div className='separator' />

      <section className="resume">
        <h3 className="section_subtitle subtitle_center">Experience And Education</h3>
        <div className='resume_container grid'>
          <div className='resume_data'>
            {resume.map((val) =>
              val.category === "Work Experience" ? (
                <ResumeItem key={val.id} {...val} />
              ) : null
            )}
          </div>
          <div className='resume_data'>
            {resume.map((val) =>
              val.category === "Education" ? (
                <ResumeItem key={val.id} {...val} />
              ) : null
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
