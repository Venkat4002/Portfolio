import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    fetch('https://formspree.io/f/xkgnnevq', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
    .then(response => {
      if (response.ok) {
        setSubmitted(true);
      }
    })
    .catch(error => console.error('Error:', error));
  };

  // Add the success message here
  if (submitted) {
    return (
      <div className="thank-you-message">
        <h3>Thank you!</h3>
        <p>Your message has been sent. I will get back to you soon!</p>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Info :</h2>
      <p>Email: <a href="mailto:venkateswararaobhavana@gmail.com">venkateswararaobhavana@gmail.com</a></p>
      <p>Phone: <a href="tel:+15139575878">(513)-957-5878</a></p>
      {/* <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
        Visit My LinkedIn
      </a> */}

      {/* New Heading for Email Form */}
      <h3 className="email-heading">Send an Email to Me</h3>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input type="text" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <textarea name="message" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
