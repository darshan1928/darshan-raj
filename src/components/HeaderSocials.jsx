import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/darshanraj1928/" target="_blank" rel="noreferrer"><BsLinkedin size ='40px'/></a>
        <a href="https://github.com/darshan1928"  target="_blank" rel="noreferrer"><BsGithub size ='40px' /></a>
        <a href="https://twitter.com/CallMe_Darshan"  target="_blank" rel="noreferrer"><BsTwitter size ='40px'/></a>
       
    </div>
  )
}

export default HeaderSocials