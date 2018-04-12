const express = require('express');
const db = require('./db/index');


// const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// logs requests to the console
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) =>  {
  db.any('SELECT * FROM users WHERE id < $1', [10])
    .then((data) => {
      res.status(200).send({
        message: data,
      });
    })
    .catch((error) => {
      res.status(200).send({
        message: error,
      });
    });
});

app.listen(3000, () => {
  console.log('server running at: http://localhost:3000');
});

module.exports.app = app;
