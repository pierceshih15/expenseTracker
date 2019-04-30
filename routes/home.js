const express = require('express');
const router = express();
const Record = require('../models/record');
const monthList = require('../public/data/months.json').results;
const categoryList = require('../public/data/categories.json').results;

router.get('/', (req, res) => {
  // 宣告變數作為篩選條件
  const filterMonth = req.query.filterMonth || '';
  const filterMonthRegExp = new RegExp("2019-" + filterMonth, "i");
  const filterCategory = req.query.filterCategory || '';
  const filterCategoryRegExp = new RegExp(filterCategory, "i");
  Record.find({
    date: {
      $regex: filterMonthRegExp
    },
    category: {
      $regex: filterCategoryRegExp
    }
  }).sort().exec((err, records) => {
    if (err) return console.error(err);
    // 計算總和
    let totalAmount = 0;
    if (records.length > 0) {
      totalAmount = records.map(record => parseInt(record.amount)).reduce((a, b) => a + b);
    }
    return res.render('index', {
      records,
      monthList,
      categoryList,
      totalAmount,
      filterMonth,
      filterCategory
    });
  })
})

module.exports = router;