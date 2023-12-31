import React from 'react'

import "./About.css"
import Info from '../components/Info'
import Stats from '../components/Stats'
import Cv from './Cv.pdf'
import { resume } from '../Data'
import { Download } from '@mui/icons-material'
import Skills from '../components/Skills'
import ResumeItem from '../components/ResumeItem'
const About = () => {
  return (
    <main className='section container'>
      <section className='about'>
        <h2 className='section_title'>
        About <span>Me</span> 
          </h2>
          <div className='about_container grid'>
        <div className='about_info'>
          <h3 className='section_subtitle'>
            Personal Information
          </h3>
          <ul className='info_list grid'>
        <Info />
          </ul>
          <a  href={Cv} download='' className='btn'>
            Download CV <span className='btn_icon'><Download/></span>
          </a>
        </div>
        <div className='stats grid'>
          <Stats />
        </div>
          </div>
          
      </section>
      <div className='separator'>

      </div>
      <section className="skills">
        <h3 className='section_subtitle subtitle_center'>My Skills</h3>
        <div className='skills_container grid'>
          <Skills />
        </div>
      </section>
      <div className='separator'/>
      <section className="resume">
        <h3 className="section_subtitle subtitle_center">Experience And Education</h3>
        <div className='resume_container grid'>
          <div className='resume_data'>
            {resume.map((val)=>{
              if(val.category ==="Work Experience"){
                return<ResumeItem key={val.id} {...val} />
              }
            })}
          </div>
          <div className='resume_data'>
            {resume.map((val)=>{
              if(val.category ==="Education"){ 
                return<ResumeItem key={val.id} {...val} />
              }
            })}
          </div>
        </div>
      </section>

    </main>
    )
}

export default About