import '../App.css';
import '../custom.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../partials/header.js';
import Footer from '../partials/footer.js';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:9000/');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setError('Error fetching jobs. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/api/delete/${id}`);
      const response = await axios.get('http://localhost:9000/');
      setJobs(response.data);
    } catch (error) {
      console.error('Error deleting job:', error);
      setError('Error deleting job. Please try again.');
    }
  };

  return (
    <div>
      <Header />

      <section className="job-list-section py-5">
        <div className="container">
          <h1 className="text-center">Job Listings</h1>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="row">
            {jobs.map((job) => (
              <div className="col-md-4 mb-4" key={job._id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{job.jobTitle}</h5>
                    <p className="card-text">Company: {job.companyName}</p>
                    <p className="card-text">Salary: {job.salary}</p>
                    <p className="card-text">Description: {job.jobDescription}</p>
                    <p className="card-text">Location: {job.jobLocation}</p>

                    <button
                      className="btn btn-danger mr-2"
                      onClick={() => handleDelete(job._id)}
                    >
                      Delete
                    </button>

                    <Link
                      to={`/update/${job._id}`}
                      className="btn btn-primary"
                    >
                      Update
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Jobs;
