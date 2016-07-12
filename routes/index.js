var express = require('express');
var router = express.Router();
var passport = require('passport');
var bcrypt = require('bcrypt');
var UserModel = require('../models/UserModel');

router.get('/', function(req, res, next) {
  if(!req.isAuthenticated()) {
    res.redirect('/login');
  } else {
    res.render('index', {
      title: 'Express',
      //when authenticated, all of our `req` in our routes will have the authenticated user attached
      username: req.user.username
    });
  }
});

module.exports = router;
