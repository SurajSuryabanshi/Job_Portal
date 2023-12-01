// import React, { useState } from 'react';  // Import useState

// import '../sign-in.css';
// import '../custom.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import Header from '../partials/header.js';
// import Footer from '../partials/footer.js';

// function Register() {  // Change function name to start with an uppercase letter

//     const [accountType, setAccountType] = useState('');

//     const handleRadioChange = (type) => {
//       setAccountType(type);
//     };

//   return (
//     <div>
//       <Header />
      
//       <div className="text-center m-5-auto">
//         <h2>Join us</h2>
//         <h5>Create your personal account</h5>
//         <form action="/home">
//           <p>
//             <label>Username</label><br/>
//             <input type="text" name="first_name" required />
//           </p>
//           <p>
//             <label>Email address</label><br/>
//             <input type="email" name="email" required />
//           </p>
//           <p>
//             <label>Password</label><br/>
//             <input type="password" name="password" required />
//           </p>

//           <p>
//         <label>
//           Job Seeker
//           <input
//             type='radio'
//             name='accountType'
//             value='jobSeeker'
//             checked={accountType === 'jobSeeker'}
//             onChange={() => handleRadioChange('jobSeeker')}
//             required
//           />
//         </label>
//       </p>

//       <p>
//         <label>
//           Recruiter
//           <input
//             type='radio'
//             name='accountType'
//             value='recruiter'
//             checked={accountType === 'recruiter'}
//             onChange={() => handleRadioChange('recruiter')}
//             required
//           />
//         </label>
//       </p>

        
//           <p>
//             <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
//           </p>
//           <p>
//             <button id="sub_btn" type="submit">Register</button>
//           </p>
//         </form>
//         <footer>
//           <p><Link to="/">Back to Homepage</Link>.</p>
//         </footer>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Register;

import React, { useState } from 'react';
import axios from 'axios';
import Header from '../partials/header.js';
import Footer from '../partials/footer.js';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState(null);

  const backendURL = 'http://localhost:9000/api/users'; // Replace with your backend server URL

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend API
      const response = await axios.post(backendURL, formData);

      console.log('User registered:', response.data);

      // Clear form data
      setFormData({
        name: '',
        email: '',
        password: '',
        accountType: '',
      });

      // Set registration success message
      setRegistrationSuccess(true);
      setRegistrationError(null);
    } catch (error) {
      console.error('Error registering user:', error);
      // Set registration error message
      setRegistrationSuccess(false);
      setRegistrationError('Registration failed. Please try again.');
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
        <h2>Join us</h2>
        <h5>Create your personal account</h5>
        <form onSubmit={handleFormSubmit}>
          <p>
            <label>Username</label><br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </p>
          <p>
            <label>Email address</label><br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </p>
          <p>
            <label>Password</label><br />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </p>

          <p>
            <label>
              Job Seeker
              <input
                type="radio"
                name="accountType"
                value="jobSeeker"
                checked={formData.accountType === 'jobSeeker'}
                onChange={() => handleInputChange({ target: { name: 'accountType', value: 'jobSeeker' } })}
                required
              />
            </label>
          </p>

          <p>
            <label>
              Recruiter
              <input
                type="radio"
                name="accountType"
                value="recruiter"
                checked={formData.accountType === 'recruiter'}
                onChange={() => handleInputChange({ target: { name: 'accountType', value: 'recruiter' } })}
                required
              />
            </label>
          </p>

          {registrationSuccess && (
            <div style={{ color: 'green', marginTop: '10px' }}>Registration successful! Welcome to our community.</div>
          )}

          {registrationError && (
            <div style={{ color: 'red', marginTop: '10px' }}>{registrationError}</div>
          )}

          <p>
            <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
          </p>
          <p>
            <button type="submit">Register</button>
          </p>
        </form>
        <footer>
          <p>Back to Homepage.</p>
        </footer>
      </div>
      <Footer />
    </div>
  );
}

export default Register;


