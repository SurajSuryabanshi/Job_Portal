const express = require("express");
const jobRoutes = express.Router();
const Job = require('../model/jobs.model');

// Get all jobs
jobRoutes.route('/').get((req, res) => {
  Job.find()
    .then(jobs => res.status(200).json(jobs))
    .catch(err => res.status(400).json({ "error": err }))
});

// Get job by ID
jobRoutes.route('/:id').get((req, res) => {
  Job.findById(req.params.id)
    .then(jobs => res.status(200).json(jobs))
    .catch(err => res.status(400).json({ "error": err }))
});

// Add a new job
jobRoutes.route('/add').post((req, res) => {
  let job = new Job(req.body);
  job.save()
    .then(jobs => res.status(200).json(jobs))
    .catch(err => res.status(400).json({ "error": err }))
});

// Update job by ID
jobRoutes.route('/update/:id').put((req, res) => {
  Job.findById(req.params.id)
    .then(jobs => {
      // update object with new data
      jobs.jobTitle = req.body.jobTitle;
      jobs.companyName = req.body.companyName;
      jobs.jobDescription = req.body.jobDescription;
      jobs.salary = req.body.salary;
      jobs.date = req.body.date;
      jobs.jobType = req.body.jobType;
      jobs.jobLocation = req.body.jobLocation; // Make sure this property matches your schema

      // save new data
      jobs.save()
        .then(jobs => res.status(200).json(jobs))
        .catch(err => res.status(400).json({ "error": err }));
    })
    .catch(err => res.status(400).json({ "error": err }));
});

// Delete job by ID
jobRoutes.route('/api/delete/:id').delete((req, res) => {
  Job.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ "message": "Job deleted successfully" }))
    .catch(err => res.status(400).json({ "error": err }));
});

module.exports = jobRoutes;
