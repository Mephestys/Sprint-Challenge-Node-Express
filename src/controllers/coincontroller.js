const express = require('express');
const router = express.Router();

const STATUS_SUCCESS = 200;
const STATUS_USER_ERROR = 422;

const { getValues } = require('../models/compare.js');

router.get('/compare', (req, res) => {
  getValues()
    .then(results => {
      res.status(STATUS_SUCCESS)
      res.send( {results: results })
    })
    .catch(err => {
      console.log(err);
      res.status(STATUS_USER_ERROR)
      res.send( {error: err })
    });
})

module.exports = router;
