import React, { useState } from 'react';
import axios from 'axios';
import Header from '../partials/header.js';
import Footer from '../partials/footer.js';

function Postjob() {
  const [formData, setFormData] = useState({
    jobTitle: '',
    salary: '',
    companyName: '',
    jobType: '',
    jobLocation: '',
    jobDescription: '',
  });

  const backendURL = 'http://localhost:9000'; // Replace with your backend server URL

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend API
      const response = await axios.post(`${backendURL}/add`, formData);

      console.log('Job posted:', response.data);

      // Clear form data or perform any other necessary actions
      setFormData({
        jobTitle: '',
        salary: '',
        companyName: '',
        jobType: '',
        jobLocation: '',
        jobDescription: '',
      });
    } catch (error) {
      console.error('Error posting job:', error);
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

      <section className="post-job-section py-5">
        <div className="container">
          <h1 className="text-center">Post a Job</h1>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form id="postJobForm" onSubmit={handleFormSubmit}>
                <div className="form-group mt-3">
                  <label htmlFor="jobTitle">Job Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    placeholder="e.g. Professional UI/UX Designer"
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="salary">Salary</label>
                  <input
                    type="text"
                    className="form-control"
                    id="salary"
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                    placeholder="e.g. 80-90k/year"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="companyName">Company</label>
                  <input
                    type="text"
                    className="form-control"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="e.g. Facebook, Inc."
                  />
                </div>

                <fieldset className="form-group">
                  <legend>Job Type</legend>
                  {/* ... (rest of your job type code) */}
                </fieldset>

                <div className="form-group">
                  <label htmlFor="jobLocation">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="jobLocation"
                    name="jobLocation"
                    value={formData.jobLocation}
                    onChange={handleInputChange}
                    placeholder="Western City, UK"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="jobDescription">Job Description</label>
                  <textarea
                    className="form-control"
                    id="jobDescription"
                    name="jobDescription"
                    value={formData.jobDescription}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Describe the role and responsibilities"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    <Footer />
    </div>
  );
}

export default Postjob;