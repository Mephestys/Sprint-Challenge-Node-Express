const express = require('express');
const router = express.Router();

const STATUS_SUCCESS = 200;
const STATUS_USER_ERROR = 422;

const {
  getCurrentValue,
  getPreviousValue,
} = require('../models/compare.js');

router.get('/compare', (req, res) => {
  console.log('Temp');
})

module.exports = router;
