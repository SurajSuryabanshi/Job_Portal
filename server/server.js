const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const compress = require('compression');
const cookieParser = require('cookie-parser');
const config = require('./config/config');
const userRoutes = require('./routes/user.routes.js');
const authRoutes = require('./routes/auth.routes.js');
const authCtrl = require('./controllers/auth.controller.js');
const requireToken = require('./controllers/requireToken.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(require('./routes/jobRecord'));
app.use('/', userRoutes);
app.use('/', authRoutes);
app.use(requireToken);

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
  res.status(401).json({"error" : err.name + ": " + err.message}) 
  }else if (err) {
  res.status(400).json({"error" : err.name + ": " + err.message}) 
  console.log(err)
  } 
})

//protected route
app.get('/api/protected', authCtrl.requireSignin, (req, res) => {
  // If the middleware passes, the user is authenticated
  res.json({ message: 'You are authenticated!', user: req.auth });
});

// MongoDB connection
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('DB connected......');
});

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
