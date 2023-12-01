import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

function Header() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
          <a className="navbar-brand" href="/"> <img src="/logo4.png" height="45" width="45" alt=""/>CodeCraze</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/About">About</a></li>
              <li className="nav-item"><a className="nav-link" href="/Jobs">Jobs</a></li>
              <li className="nav-item"><a className="nav-link" href="/Contact">Contact</a></li>
              <li className="nav-item">
                <a className="nav-link btn btn-primary text-white" href="/post-a-job">Post a Job</a>
              </li>
              {isAuthenticated ? (
                <li>
                  <button className="nav-link btn btn-primary text-white" onClick={logout}>Logout</button>
                </li>
              ) : (
                <li>
                  <Link className="nav-link" to="/login-page"><b><u>Sign in</u></b></Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
