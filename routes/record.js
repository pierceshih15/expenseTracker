const express = require('express');
const router = express();
const Record = require('../models/record');

// 建立 Record 頁面
router.get('/new', (req, res) => {
  res.send('建立 Record 頁面');
});

// 建立 Record 動作
router.post('/new', (req, res) => {
  res.send('建立 Record');
});

// 編輯 Record 頁面
router.get('/:id/edit', (req, res) => {
  res.send('編輯 Record 頁面');
});

// 編輯 Record 動作
router.put('/:id/edit', (req, res) => {
  res.send('編輯 Record');
});

// 刪除 Record 動作
router.put('/:id/delete', (req, res) => {
  res.send('刪除 Record');
});

module.exports = router;