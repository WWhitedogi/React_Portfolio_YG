//rafce
import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll'
import menu from '../../assets/menu.png';

const Navbar = () => {
     const[showMenu,setShowMenu]=useState(false);

  return (
    <nav className="navbar">
        <img className='logo' src={logo} alt="logo" />
        <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="deskTopMenuListItem">Home</Link>
        <Link  activeClass='active' to='skills'  spy={true} smooth={true} offset={-50} duration={500} className="deskTopMenuListItem">About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-80} duration={500} className="deskTopMenuListItem">Works</Link>
        
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-80} duration={500} className="deskTopMenuListItem">Projects</Link>

        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="deskTopMenuListItem">Contact</Link>
        
        </div>
    
        {/* <button className="deskTopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }} >
            <img src={contactImg} alt="#" className="deskTopMenuImg" />
            Contact me 
            </button> */}

      <img className='mobMenu' src={menu} alt="menu" onClick={()=>setShowMenu(!showMenu)} />

      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }} >
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)} >Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="ListItem"
          onClick={() => setShowMenu(false)}  >About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)} >Works</Link>

        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-80} duration={500} className="ListItem">Projects</Link>

        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="ListItem">Contact</Link>
      </div>
            
    </nav>
  )
}

export default Navbar