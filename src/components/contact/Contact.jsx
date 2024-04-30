import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FiLinkedin, FiGithub } from "react-icons/fi";


// TODO: fix contact form

function Contact() {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <a href="mailto:parker.rappleye1@gmail.com" target="_blank" rel="noreferrer" className="contact__option">
            <article>
              <HiOutlineMail className="contact__option-icon" />
              <h4>Email</h4>
              <p>Send a message</p>
            </article>
          </a>
          <a href="https://www.linkedin.com/in/parker-rappleye/" target="_blank" rel="noreferrer" className="contact__option">
            <article>
              <FiLinkedin className="contact__option-icon" />
              <h4>LinkedIn</h4>
              <p>Connect with me</p>
            </article>
          </a>
          <a href="https://www.github.com/prappleman" target="_blank" rel="noreferrer" className="contact__option">
            <article>
              <FiGithub className="contact__option-icon" />
              <h4>GitHub</h4>
              <p>Browse my projects</p>
            </article>
          </a>
        </div>

        
        {/* START CONTACT FORM*/}
        <form>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Type your message here"
            required
          ></textarea>
          <button type="submit" id="contact__btn" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
