const express = require('express');
const router = express.Router();
const User = require('../models/user');

// 登入頁面
router.get('/login', (req, res) => {
  res.render('login');
});

// 登入動作（檢查）
// next 等於 passport middleware 的 done 
router.post('/login', (req, res, next) => {
  res.render('login');
});

// 註冊頁面
router.get('/register', (req, res) => {
  res.render('register');
});

// 註冊動作(檢查)
router.post('/register', (req, res) => {
  res.render('register');
});

// 登出動作
router.get('/logout', (req, res) => {
  res.redirect('/users/login');
});

module.exports = router;