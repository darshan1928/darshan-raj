import React from 'react'
import CVLT from './CVLT';
import HeaderSocials from './HeaderSocials';
import "../styles/Header.css"
import Animation from './Animation';


function Header() {
  return (
    <>
    <header>
      <div className="container header__container">
      <h3>Hey,I'm</h3>
      <h1>DARSHAN RAJ</h1>
      <div className="text-light"> <h3>FULL-STACK DEVELOPER</h3></div>
    
      <CVLT/>
      <HeaderSocials/>
     
      </div>

      <Animation/>
    </header>
    
    </>
  )
}

export default Header;