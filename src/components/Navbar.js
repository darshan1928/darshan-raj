import React from "react";
import "../styles/Navbar.css";
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {GiSkills} from 'react-icons/gi';
import {BiMessageSquareDetail} from 'react-icons/bi';
import { useState } from "react";


function Navbar() {

const [activeNav, setActiveNav] = useState('#')
       

    return (
        <nav>
            <a  href="#" onClick={()=> setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#about"  onClick={()=> setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}><AiOutlineUser/></a>
            <a href="#skills" onClick={()=> setActiveNav('#skills')} className={activeNav === "#skills" ? 'active' : ''} ><GiSkills/></a>
            <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''} ><BiMessageSquareDetail/></a>
           
            
        </nav>
    );
}

export default Navbar;
