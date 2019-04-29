const express = require('express');
const router = express();
const Record = require('../models/record');
const monthList = require('../public/data/months.json').results;
const mongoose = require('mongoose');

router.get('/', (req, res) => {
  Record.find((err, records) => {
    if (err) return console.error(err);
    // 計算總和
    let totalAmount = 0;
    if (records.length > 0) {
      totalAmount = records.map(record => parseInt(record.amount)).reduce((a, b) => a + b);
    }
    return res.render('index', {
      records: records,
      monthList: monthList,
      totalAmount: totalAmount,
    });
  })
})

module.exports = router;