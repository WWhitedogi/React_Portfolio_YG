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
      <h2 className="worksTitle">Work Experiences4</h2>
      {/* <span className="worksDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. sunt deserunt quia vitae laborum accusantium ipsa asperiores architecto!</span> */}
      <div className="cards">
        <div className='card'>
          <div className='card__img__container'>

          </div>
          <h3 className='card__title'>Title 1</h3>
          <div className='card__text'>Text for card 1</div>
        </div>

        <div className='card'>
          <div className='card__img__container'>

          </div>
          <h3 className='card__title'>Title 2</h3>
          <div className='card__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab ex aliquid quibusdam praesentium optio id maiores explicabo sit eaque? Assumenda aperiam ab, temporibus omnis molestias aliquid doloremque eveniet ea.</div>
        </div>

        <div className='card'>
          <div className='card__img__container'>

          </div>
          <h3 className='card__title'>Title 3</h3>
          <div className='card__text'>Text for card 3</div>
        </div>
      </div>
      <button className="worksBtn">See More</button>
    </section>
  );
}

export default Works