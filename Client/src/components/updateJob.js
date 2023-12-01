import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../updatejob.css';
import { useParams } from 'react-router-dom';
import Header from '../partials/header.js';
import Footer from '../partials/footer.js';

function UpdateJob() {
    const { id } = useParams();
    const [job, setJob] = useState({
      jobTitle: '',
      companyName: '',
      jobDescription: '',
      salary: '',
      jobLocation: '',
    });
  
    const [updateMessage, setUpdateMessage] = useState('');
  
    useEffect(() => {
      const fetchJob = async () => {
        try {
          const response = await axios.get(`http://localhost:9000/${id}`);
          setJob(response.data);
        } catch (error) {
          console.error('Error fetching job for update:', error);
        }
      };
  
      fetchJob();
    }, [id]);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setJob({ ...job, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await axios.put(`http://localhost:9000/update/${id}`, job);
        setUpdateMessage('Job updated successfully!');
      } catch (error) {
        console.error('Error updating job:', error);
        setUpdateMessage('Error updating job. Please try again.');
      }
    };

  return (
    <div>

    <Header />

        <h2>Update Job</h2>
      {updateMessage && <p>{updateMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Job Title:
          <input type="text" name="jobTitle" value={job.jobTitle} onChange={handleInputChange} />
        </label>
        <label>
          Company Name:
          <input type="text" name="companyName" value={job.companyName} onChange={handleInputChange} />
        </label>
        <label>
          Job Description:
          <input type="text" name="jobDescription" value={job.jobDescription} onChange={handleInputChange} />
        </label>
        <label>
          Salary:
          <input type="text" name="salary" value={job.salary} onChange={handleInputChange} />
        </label>
        <label>
          Location:
          <input type="text" name="jobLocation" value={job.jobLocation} onChange={handleInputChange} />
        </label>
        {/* Add similar input fields for other job properties */}
        <button type="submit">Update Job</button>
      </form>

    <Footer />
    </div>
  );
}

export default UpdateJob;
