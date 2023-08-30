import React from 'react';
import './intro.css';
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'
const Intro = () => {
  return (
    <section id='intro'>
      <div className="introContent">
        <span className='hello'> Hello 👋 ,</span>
        <span className='introText'>I'm <span className='introName'>Yige Lege</span>
          <br />Fullstack Developer </span>
        <p className="introPara">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Voluptatum excepturi  maxime ullam labore accusantium  <br />cum sequi alias itaque, nulla provident.</p>

        {/* Adding two buttons */}
        <div className="introButtons">
          {/* Redirect to a link */}
          <a href="YOUR_LINK_HERE" target="_blank" rel="noopener noreferrer">
            <button className="introBtn1">Get My Resume</button>
          </a>

          {/* Scroll to 'contact' section */}
          <button className="introBtn2" onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}>Let's Talk</button>
          <button className="introBtn3" onClick={() => {
            window.open('https://www.example.com', '_blank', 'noopener,noreferrer');
          }}>
            Let's Connect
          </button>

        </div>
      </div>
      <img src={bg} alt="profile" className='bg' />
    </section>

  )
}

export default Intro;