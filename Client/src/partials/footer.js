import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function footer() {
    return (
        <div>
              <footer className="text-light bg-dark">
    <div className="container py-5">
      <div className="row">
        <div className="col-md-3">
          <h5>About</h5>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
  
          <a href="#" className="text-light mr-2"><i className="fab fa-twitter" aria-hidden="true"></i></a>
          <a href="#" className="text-light mr-2"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
          <a href="#" className="text-light mr-2"><i className="fab fa-instagram" aria-hidden="true"></i></a>
        </div>
        <div className="col-md-3">
          <h5>Employers</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-light">How it works</a></li>
            <li><a href="#" className="text-light">Register</a></li>
            <li><a href="#" className="text-light">Post a Job</a></li>
            <li><a href="#" className="text-light">Advance Skill Search</a></li>
            <li><a href="#" className="text-light">Recruiting Service</a></li>
            <li><a href="#" className="text-light">Blog</a></li>
            <li><a href="#" className="text-light">Faq</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Workers</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-light">How it works</a></li>
            <li><a href="#" className="text-light">Register</a></li>
            <li><a href="#" className="text-light">Post Your Skills</a></li>
            <li><a href="#" className="text-light">Job Search</a></li>
            <li><a href="#" className="text-light">Employer Search</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Have a Questions?</h5>
          <ul className="list-unstyled">
            <li className="text-light">
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              203 Fake St. Mountain View, San Francisco, California, USA
            </li>
            <li className="text-light">
              <i className="fas fa-phone" aria-hidden="true"></i>
              +2 392 3929 210
            </li>
            <li className="text-light">
              <i className="fas fa-envelope" aria-hidden="true"></i>
              info@yourdomain.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
        </div>
        );
    }
    
    export default footer;