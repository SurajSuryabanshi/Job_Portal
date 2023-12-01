const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
let Job = new Schema({
    jobTitle:{
        type: String,
        trim: true,
        required: 'Title is required'
    },
    companyName:{
        type: String
    },
    jobDescription:{
        type: String
    },
    salary:{
        type: Number
    },
    date:{
        type: Date,
        default: Date.now
    },
    updated: Date,
    jobType: {
        type: String
    },
    jobLocation: {
        type:String
    }
});

module.exports = mongoose.model('Jobs', Job);
