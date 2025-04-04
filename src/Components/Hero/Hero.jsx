import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
  return (
    <div id='home'  className="hero">
      <img src={profile_img} alt="" />
      <h1>Hello I'm <span>Shailendra S</span>, Web Developer</h1>
<p>I'm a creative and detail-oriented developer with a passion for building clean, responsive websites. I love solving real-world problems and always aim to deliver smooth user experiences through modern design and code.</p>
      <div className = "hero-action">
        <div className="hero-connect"> <AnchorLink className="anchor-link" offset={50} href='#contact'>Connect with me </AnchorLink></div>
        <div className ="hero-resume">My resume</div>
      </div>
    </div>
  )
}
export default Hero
