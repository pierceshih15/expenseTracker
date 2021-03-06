const express = require('express');
const router = express();
const Record = require('../models/record');
const {
  authenticated
} = require('../config/auth');
const moment = require('moment')

// 建立 Record 頁面
router.get('/new', authenticated, (req, res) => {
  const today = moment().format('YYYY-MM-DD')
  res.render('new', {
    today
  });
});

// 建立 Record 動作
router.post('/new', authenticated, (req, res) => {
  const record = Record({
    name: req.body.name,
    category: req.body.category,
    amount: req.body.amount,
    date: req.body.date,
    userId: req.user._id
  });
  record.save(err => {
    if (err) return console.error(err);
    res.redirect('/');
  });
});

// 編輯 Record 頁面
router.get('/:id/edit', authenticated, (req, res) => {
  Record.findOne({
    userId: req.user._id,
    _id: req.params.id
  }, (err, record) => {
    if (err) return console.error(err);
    return res.render('edit', {
      record: record,
    });
  })
});

// 編輯 Record 動作
router.put('/:id/edit', authenticated, (req, res) => {
  Record.findOne({
    _id: req.params.id,
    userId: req.user._id,
  }, (err, record) => {
    if (err) return console.error(err);

    Object.assign(record, req.body);

    record.save(err => {
      if (err) return console.error(err);
      res.redirect('/');
    });
  })
});

// 刪除 Record 動作
router.delete('/:id/delete', authenticated, (req, res) => {
  Record.findOne({
    _id: req.params.id,
    userId: req.user._id,
  }, (err, record) => {
    if (err) return console.error(err);

    record.remove(err => {
      if (err) return console.error(err);
      res.redirect('/');
    });
  })
});

module.exports = router;