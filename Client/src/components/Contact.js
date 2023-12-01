import '../App.css';
import '../custom.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import React from 'react';
import Header from '../partials/header.js';
import Footer from '../partials/footer.js';

function Contact() {
    return (
        <div>
          <Header />


  <section className="contact-section py-5">
      <div className="container">
        <h1 className="text-center">Contact Us</h1>
        <div className="row mt-5">
          <div className="col-md-6">
            {/* Contact Form */}
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="3" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
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