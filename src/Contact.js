import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import Header from './Header';
import Footer from './Footer';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rcn5bnm', 'template_hiybwjl', form.current, {
        publicKey: 'rMp-1JOFrO6Rl8rjh',
      })
      .then(
        () => {
          alert('SUCCESSFully Sent The Message, We Will Reply Soon!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };
  

  return (
    <div>
    <Header/>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Subject</label>
      <textarea name="subject" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form><div className='Foot'>
    <Footer/></div>
    </div>
  );
};