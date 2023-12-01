const User = require('../model/user.model.js');
const extend = require('lodash/extend'); 
const errorHandler = require('./error.controller.js'); // Replace with the actual path to your error handler module

const list = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const create = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate the data (you can use a validation library like Joi here)

        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Name, email, and password are required' });
        }

        // Create a new user instance
        const user = new User({
            name,
            email,
            password,
        });

        // Save the user to the database
        await user.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const read = async (req, res) => {
    try {
        res.json(req.profile);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const update = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate the data (you can use a validation library like Joi here)

        // Update user fields
        req.profile.name = name;
        req.profile.email = email;
        req.profile.password = password;

        // Save the updated user to the database
        await req.profile.save();

        res.json({ message: 'User updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const remove = async (req, res) => {
    try {
        await req.profile.remove();
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const userByID = async (req, res, next, id) => {
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        req.profile = user;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    list,
    create,
    read,
    update,
    remove,
    userByID,
};
