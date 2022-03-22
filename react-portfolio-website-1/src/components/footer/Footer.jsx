import React from 'react'
import './footer.css'
import {ImFacebook} from 'react-icons/im'
import {SiInstagram} from 'react-icons/si'
import {SiTwitter} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#top" className='footer__logo'>PORTFOLIO</a>

      <ul className="permalinks">
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><ImFacebook /></a>
        <a href="https://instagram.com"><SiInstagram /></a>
        <a href="https://twitter.com"><SiTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Maria Trofimova. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer