import React from 'react';
import './footer.css'
import {AiOutlineFacebook, AiOutlineInstagram} from 'react-icons/ai'
import {TfiTwitter} from 'react-icons/tfi'
import {FiGithub, FiLinkedin} from 'react-icons/fi'

function Footer() {
  return (
    <footer id='footer'>
      <ul className="permaLinks">
       <li><a href="#">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#experience">Experience</a></li>
       <li><a href="#services">Services</a></li>
       <li><a href="#portfolio">Portfolio</a></li>
       <li><a href="#contact">Contact</a></li>
      </ul>

{/* TODO: change links to mine*/}

      <div className="footer__socials">
        <a href="https://facebook.com/isayaniphotography" target="_blank"><AiOutlineFacebook/></a>
        <a href="https://instagram.com/insha.art" target="_blank"><AiOutlineInstagram/></a>
        <a href="https://twitter.com/inshasayani" id='twitter__logo' target="_blank"><TfiTwitter/></a>
        <span className="mobile__socials">
        <a href="https://github.com/isayani" target="_blank"><FiGithub/></a>
        <a href="https://linkedin.com/in/inshasayani" target="_blank"><FiLinkedin/></a>
        </span>
      </div>

      <div className="footer__copyright">
        <small>&copy; Parker Rappleye</small>
      </div>
    </footer>
  )
}

export default Footer