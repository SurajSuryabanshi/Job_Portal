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
<section className="hero-section py-5">
        <div className="container">
          <h1 className="text-center">About Us</h1>
          <p className="text-center">Learn more about our mission, vision, and values.</p>
        </div>
  </section>

{/* Company Description Section */}
<section className="company-description py-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <h2>Our Story</h2>
        <p>
          Tell the story of how your company was founded, its mission, and vision.
          Explain what drives your company and what sets it apart from the competition.
        </p>
      </div>
      <div className="col-lg-6">
        {/* Optionally, add an image or a company timeline here */}
      </div>
    </div>
  </div>
</section>

{/* Team Section */}
<section className="team py-5 bg-light">
  <div className="container">
    <h2 className="text-center">Meet Our Team</h2>
    <div className="row">
      {/* Team member cards here */}
    </div>
  </div>
</section>

{/* Testimonials or Achievements Section */}
<section className="testimonials py-5">
  <div className="container">
    <h2 className="text-center">What People Say About Us</h2>
    {/* Testimonials carousel or quotes here */}
  </div>
</section>


      <Footer />
  </div>
  
);

}

export default About;