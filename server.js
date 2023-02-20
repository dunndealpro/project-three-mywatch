const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();
// Connect to db after the dotenv above
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(express.static(path.join(__dirname, 'build')));

// app.use(require('./config/checkToken'));
app.use(require('./config/checkToken'));
// Put API routes here, before the "catch all" route

app.use('/api/users', require('./routes/api/users'));
app.use('/api/mywatch', require('./routes/api/mywatch'));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


module.exports = app  

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server

// node ./bin/www

// commented out for deployment
// const port = process.env.PORT || 3001;

// app.listen(port, function() {
//   console.log(`Express app running on port ${port}`)
// });