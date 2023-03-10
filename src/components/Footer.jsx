import React from 'react';
import "../styles/Footer.css";
import {IoLogoLinkedin} from 'react-icons/io';
import {IoLogoGithub} from 'react-icons/io';
import {IoLogoTwitter} from 'react-icons/io';
import {TbCopyright} from 'react-icons/tb';

function Footer() {

  const today = new Date();
  return (
  <footer>
    <a href="#" className='footer__logo'>DARSHAN RAJ</a>

    <ul className='permalink' >

      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#contact">Contact</a></li>
      
    </ul>

    <div className="footer__socials">
    <a href="https://www.linkedin.com/in/darshanraj1928/" target="_blank" rel="noreferrer"><IoLogoLinkedin size ='40px'/></a>
        <a href="https://github.com/darshan1928"  target="_blank" rel="noreferrer"><IoLogoGithub size ='40px' /></a>
        <a href="https://twitter.com/CallMe_Darshan"  target="_blank" rel="noreferrer"><IoLogoTwitter size ='40px'/></a>
       
    </div>
    <div className="footer__copyright">
      <small> <h5><TbCopyright size ='20px'  />copyright {today.getFullYear()}  DARSHAN RAJ </h5></small>
    </div>
  </footer>
  )
}

export default Footer