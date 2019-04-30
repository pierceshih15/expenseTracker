const express = require('express');
const router = express();
const passport = require('passport');

// 一個是使用者要透過 Facebook 登入時的網址 /facebook
router.get(
  '/facebook',
  passport.authenticate('facebook', {
    scope: ['email', 'public_profile'] // Ask for user info
  })
);

// 一個則是當我們取得「授權許可」後 redirect 的網址 /facebook/callback
router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/users/login',
  })
);

module.exports = router;