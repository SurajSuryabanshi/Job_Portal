

const User = require('../model/user.model.js');
const jwt = require('jsonwebtoken');
const { expressjwt } = require("express-jwt");
const config = require('../config/config.js');

const authCtrl = {
  signin: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }

      // Check if the password is correct
      if (!user.authenticate(password)) {
        return res.status(401).json({ error: "Email and password don't match." });
      }

      // Generate and sign a JWT token
      const token = jwt.sign({ _id: user._id }, config.jwtSecret, { expiresIn: '1d' });

      // Set the token as a cookie
      res.cookie('t', token, {
        expire: new Date() + 9999,
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
      });

      // Return the token and user information
      return res.json({
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (err) {
      console.error('Error signing in:', err);
      return res.status(401).json({ error: 'Could not sign in' });
    }
  },

  signout: (req, res) => {
    res.clearCookie('t', { secure: process.env.NODE_ENV === 'production', httpOnly: true });
    return res.status(200).json({
      message: 'Signed out',
    });
  },

  requireSignin: expressjwt({
    secret: config.jwtSecret,
    algorithms: ['HS256'],
    userProperty: 'auth',
  }),

  hasAuthorization: (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
    if (!authorized) {
      return res.status(403).json({
        error: 'User is not authorized',
      });
    }
    next();
  },
};

module.exports = authCtrl;



