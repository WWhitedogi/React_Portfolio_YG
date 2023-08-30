import React from 'react'
import './works.css'
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';
const Works = () => {
  return (
    <section id='works' >
      <h2 className="worksTitle">Work Experiences</h2>
      {/* <span className="worksDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. sunt deserunt quia vitae laborum accusantium ipsa asperiores architecto!</span> */}
      <div className="cards">

        <div className='card'>
          <div className='card__img__container'>
           
          </div>
          <h3 className='card__title'>03/2023 - Present</h3>
          <div className='card__text'>
            <strong>Company:</strong> Northeastern University<br />
            <strong>Role:</strong> Research Assistant (Main Contributor)<br />
            <strong>Description:</strong> Developed a real-time toxic gas detection platform using Django...
           
          </div>
        </div>

        <div className='card'>
          <div className='card__img__container'>
          
          </div>
          <h3 className='card__title'>05/2020 - 08/2020</h3>
          <div className='card__text'>
            <strong>Company:</strong> Startup in Beijing<br />
            <strong>Role:</strong> FrontEnd Engineer Intern<br />
            <strong>Description:</strong> Designed and launched a food delivery App...
        
          </div>
        </div>

        <div className='card'>
          <div className='card__img__container'>
           
          </div>
          <h3 className='card__title'>01/2023 - 03/2023</h3>
          <div className='card__text'>
            <strong>Project:</strong> Cafe Hoppers<br />
            <strong>Technologies:</strong> Full Stack | React, MongoDB, Express.js, Node.js<br />
            <strong>Description:</strong> Created full-stack application using JavaScript...
          </div>
        </div>

      </div>

    </section>
  );
}

export default Works