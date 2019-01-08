const express = require('express');

const log = require('./logger');

const router = express.Router();

router.post('/event', (req, res, next) => {
  console.log(req.body);
  log.info(req.body);
});

module.exports = router;