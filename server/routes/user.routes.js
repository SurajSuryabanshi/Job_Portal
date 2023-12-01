const express = require('express');
const userCtrl = require('../controllers/user.controller.js');
const authCtrl = require('../controllers/auth.controller.js');

const userRoutes = {
  setup: () => {
    const router = express.Router();

    // Routes for listing and creating users
    router.route('/api/users')
      .get(userCtrl.list)
      .post(userCtrl.create);

    // Routes for reading, updating, and deleting a specific user
    router.route('/api/users/:userId')
      .get(authCtrl.requireSignin, userCtrl.read)
      .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
      .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);

    // Middleware to handle user ID parameter
    router.param('userId', userCtrl.userByID);

    return router;
  },
};

module.exports = userRoutes.setup();

