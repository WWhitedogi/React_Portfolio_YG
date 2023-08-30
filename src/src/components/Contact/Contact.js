import React, { useRef } from 'react';
import './Contact.css';
import Walmart from '../../assets/walmart.png';
import Git from '../../assets/git.png'
import LinkedIn from '../../assets/LI-In-Bug.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ps9ulxn', 'template_hjdn1vi', form.current, 'S6wCna7UrEmNyMJI-')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contactPage'>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='from_name' />
                    <input type="email" className="email" placeholder='Your Email'  />
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className='submitBtn'>Submit</button>
                    <div className="links">
                        <a href="https://github.com/WWhitedogi" target="_blank">
                            <img src={Git} alt="page1" className="link" />
                        </a>
                        <a href="" target="_blank" >
                            <img src={LinkedIn} alt="page2" className="link" />
                        </a>
                        
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
