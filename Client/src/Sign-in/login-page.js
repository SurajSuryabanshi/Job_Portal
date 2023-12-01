import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext.js';  // Import the useAuth hook
import Header from '../partials/header.js';
import Footer from '../partials/footer.js';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();  // Access the login function from the useAuth hook

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend API
      const response = await axios.post('http://localhost:9000/auth/signin', formData);

      console.log('User logged in:', response.data);

      // Clear form data or perform any other necessary actions
      setFormData({
        email: '',
        password: ''
      });

      // Call the login function to update authentication status
      login();

      // Redirect to the home page or any other route upon successful login
      navigate('/jobs');
    } catch (error) {
      console.error('Error logging in:', error.response?.data || error.message);
      // Set login error message
      setLoginError('Invalid email or password. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <Header />
      <div className="text-center m-5-auto">
        <h2>Sign in to us</h2>
        <form onSubmit={handleFormSubmit}>
          <p>
            <label>Email address</label><br/>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </p>
          <p>
            <label>Password</label>
            <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
            <br/>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </p>
          {loginError && (
            <div style={{ color: 'red', marginTop: '10px' }}>{loginError}</div>
          )}
          <p>
            <button type="submit">Login</button>
          </p>
        </form>
        <footer>
          <p>First time? <Link to="/register">Create an account</Link>.</p>
          <p><Link to="/">Back to Homepage</Link>.</p>
        </footer>
      </div>

      <Footer />
    </div>
  );
}

export default LoginPage;
