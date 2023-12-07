import '../App.css';
import '../custom.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import React from 'react';
import Header from '../partials/header.js';
import Footer from '../partials/footer.js';


function About() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section class="aboutHead">
    <div class="container">
      <h1 class="display-4">About Our Job Portal</h1>
      <p class="lead">Discover the mission and commitment behind connecting talents with opportunities.</p>
    </div>
  </section>


      {/* Company Description Section */}
      <section className="company-description py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="section-heading">Our Mission</h2>
              <p className="text-muted">
                At OurJobPortal, we are dedicated to bridging the gap between employers and job seekers. Our mission is to provide a platform that fosters meaningful connections, empowers career growth, and contributes to the success of both individuals and organizations.
              </p>
              <p className="text-muted">
                We believe in the transformative power of employment and are committed to shaping the future of work through innovation, integrity, and inclusivity.
              </p>
            </div>
            <div className="col-lg-6">
              <img src="aboutpgpic.jpeg" className="img-fluid rounded" alt="Company Office" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-5">
        <div className="container">
          <h2 className="text-center section-heading mb-5">What Our Users Say</h2>
          <div id="testimonialsCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <p className="lead">"OurJobPortal has been a game-changer in my job search. The platform is user-friendly, and the opportunities are diverse and relevant."</p>
                <h5 className="text-muted">- Jessica, Job Seeker</h5>
              </div>
              <div className="carousel-item">
                <p className="lead">"As an employer, I've found exceptional talents through OurJobPortal. The platform streamlines the hiring process and delivers quality candidates."</p>
                <h5 className="text-muted">- Mark, Hiring Manager</h5>
              </div>
              {/* Add more items as needed */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Section */}
      <section className="interactive-section py-5 text-white text-center bg-dark">
        <div className="container">
          <h2 className="display-4">Join Us in Shaping Careers</h2>
          <p className="lead">Explore opportunities or find the right talent for your team.</p>
          <a href="/jobs" className="btn btn-outline-light btn-lg">Explore Jobs</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
