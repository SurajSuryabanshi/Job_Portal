const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required',
    },
    email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/\S+@\S+\.\S+/, 'Please fill a valid email address'], // Standard email validation regex
        required: 'Email is required',
    },
    created: {
        type: Date,
        default: Date.now,
    },
    updated: {
        type: Date,
        default: Date.now,
    },
    password: {
        type: String,
        required: 'Password is required'
    },
    salt: String
});

UserSchema.pre('save', function(next) {
    if (this.isNew || this.isModified('password')) {
        this.salt = this.makeSalt();
        this.password = this.encryptPassword(this.password);
    }
    next();
});

UserSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.password;
    },
    encryptPassword: function(password) {
        if (!password) return '';
        try {
            return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex');
        } catch (err) {
            return '';
        }
    },
    makeSalt: function() {
        return Math.round((new Date().valueOf() * Math.random())) + '';
    }
};

module.exports = mongoose.model('User', UserSchema);
