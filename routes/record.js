const express = require('express');
const router = express();
const Record = require('../models/record');

// 建立 Record 頁面
router.get('/new', (req, res) => {
  res.render('new');
});

// 建立 Record 動作
router.post('/new', (req, res) => {
  const record = Record(req.body);
  record.save(err => {
    if (err) return console.error(err);
    res.redirect('/');
  });
});

// 編輯 Record 頁面
router.get('/:id/edit', (req, res) => {
  Record.findById({
    _id: req.params.id
  }, (err, record) => {
    if (err) return console.error(err);
    return res.render('edit', {
      record: record,
    });
  })
});

// 編輯 Record 動作
router.put('/:id/edit', (req, res) => {
  Record.findById({
    _id: req.params.id
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
router.delete('/:id/delete', (req, res) => {
  Record.findById({
    _id: req.params.id
  }, (err, record) => {
    if (err) return console.error(err);

    record.remove(err => {
      if (err) return console.error(err);
      res.redirect('/');
    });
  })
});

module.exports = router;