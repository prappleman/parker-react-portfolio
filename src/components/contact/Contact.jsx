import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import emailjs from "emailjs-com";

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_va6xc0e",
        "template_15hahoq",
        e.target,
        "sbp1jEyZcHCeqmoWE"
      );

      alert("Email sent successfully!");
      e.target.reset(); // Reset the form
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending email. Please try again later.");
    }
  };

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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name"
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
