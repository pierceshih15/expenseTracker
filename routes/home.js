const express = require('express');
const router = express();
const Record = require('../models/record');

router.get('/', (req, res) => {
  res.send('首頁頁面')
})

module.exports = router;