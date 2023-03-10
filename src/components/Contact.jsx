import React from 'react';

import "../styles/Contact.css";

import emailjs from 'emailjs-com';
import { useRef } from 'react';



function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6j5ojub', 'template_hkqaslp', form.current, 'hcGJX3gpbMv8FICTC')
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
     <div className="container contact__container">
      <form ref={form} onSubmit={sendEmail}>
      <input type="text" name='name' placeholder='Your Full Name' required />
      <input type="email" name='email' placeholder='Enter Your Email' required />
      <textarea name="message" placeholder='Your Message' id="" cols="30" rows="10"></textarea>
      <button type="submit" className='btn btn-primary'>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact