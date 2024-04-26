import React from 'react';
import './footer.css'
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
      <div className="mobile__socials footer__socials">
        <a href="https://github.com/prappleman" target="_blank"><FiGithub/></a>
        <a href="https://www.linkedin.com/in/parker-rappleye/" target="_blank"><FiLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Parker Rappleye</small>
      </div>
    </footer>
  )
}

export default Footer