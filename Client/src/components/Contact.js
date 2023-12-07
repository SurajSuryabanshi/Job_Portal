import '../App.css';
import React, { useState } from 'react';
import '../custom.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from '../partials/header.js';
import Footer from '../partials/footer.js';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const sendEmail = () => {
    const { name, email, message } = formData;

    // Construct the email body
    const emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Open the default email client with the pre-filled email
    window.location.href = `mailto:jobportal2023@gmail.com?subject=Contact%20Form&body=${encodeURIComponent(
      emailBody
    )}`;

    // Clear the form after sending the message
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };
  
    return (
        <div>
          <Header />


  <section className="contact-section py-5">
      <div className="container">
        <h1 className="text-center">Contact Us</h1>
        <div className="row mt-5">
          <div className="col-md-6">
            {/* Contact Form */}
                        {/* Contact Form */}
                        <form id="contactForm">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={sendEmail}>
                  Send Message
                </button>
              </form>
          </div>
          <div className="col-md-6">
            {/* Contact Information */}
            <p><strong>Address:</strong> 1234 Street, City, Country</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Email:</strong> contact@codecraze.com</p>

            {/* Embed Google Maps */}
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18..."
                frameBorder="0"
                style={{ border: 0, width: '100%', height: '300px' }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

      <Footer />
  </div>
  
);

}

export default Contact;
