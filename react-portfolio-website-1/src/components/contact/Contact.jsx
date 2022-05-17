import React from 'react'
import './contact.scss'
import {GoMail} from 'react-icons/go'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rx05tvi', 'template_0r9hfhe', form.current, '1Dqvfxf4n12ZlR9ZJ')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <GoMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>maria.trofimoffa.1990@gmail.com</h5>
            <a href="mailto:maria.trofimoffa.1990@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>maria.trofimova</h5>
            <a href="https://m.me/maria.trofimova" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <RiWhatsappLine className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+375207006079</h5>
            <a href="https://api.whatsapp.com/send?phone+375297006079" target="_blank" rel="noreferrer">Send a message</a>
          </article>

        </div>
                  {/* ======== END OF CONTACT OPTIONS =======*/}
                  <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                  </form>
      </div>
    </section>
  )
}

export default Contact