import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <div className="contact-text">
        <p>
          If you have any questions or feedback, we'd love to hear from you!
        </p>
        <br />
        <p>
          Please use the contact form below to get in touch with us, and we'll
          get back to you as soon as possible.
        </p>
      </div>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
