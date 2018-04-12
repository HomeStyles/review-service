const express = require('express');
const db = require('./db');


// const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// logs requests to the console
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

app.listen(3000, () => {
  console.log('server running at: http://localhost:3000');
});

module.exports.app = app;
