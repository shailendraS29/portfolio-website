import React from 'react'
import './About.css'
import  about_img from '../../assets/perfectabout.jpg'

function About() {
  return (
    <div>
      <div id='about' className="about">
        <div className="about-title">
            <h1>About me</h1>
        </div>
        <div className = "about-section">
            <div className="about-left">
                <img src={about_img} alt="" />
            </div>
            <div className="about-right">
                    <div className="about-para">
                      <p>I'm a final-year Computer Science Engineering student with a deep interest in front-end development and web technologies. I enjoy building websites that are not only visually appealing but also fast and functional.</p>
                      <p>During my journey, I’ve worked on multiple projects including full-stack applications, and I’m constantly learning new tools and frameworks to improve my craft. I love turning ideas into interactive digital experiences.</p>
                    </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p>  <hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p>  <hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Python</p>      <hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>ReactJs</p>     <hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>NodeJS</p>      <hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Tailwindcss</p> <hr style={{width:"60%"}}/></div>
                </div>
            </div>
      </div>
    </div>
    </div>
  )
}
export default About
