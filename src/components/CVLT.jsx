import React from 'react';
import CV from "../assets/CV.pdf"

function CVLT() {
  return (
    <div className='cta'>
<a href={CV} download className='btn' >Download CV</a>
<a href="#contact" className='btn btn-primary' >Let's Connect</a>
        
    </div>
  )
}

export default CVLT