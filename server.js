require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./routes/api/users');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const db = process.env.MLAB_URI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {

  })
  .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/api/users', users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
