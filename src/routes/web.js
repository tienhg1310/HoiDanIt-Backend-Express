const express = require('express');
const {
  getHomePage,
  getName,
  getHome,
  postCreateUser,
} = require('../controllers/home.controller.js');
const router = express.Router();

// khai bao route
router.get('/home', getHomePage);
router.get('/hello', getHome);
router.get('/tienhg2001', getName);

router.post('/create-user', postCreateUser);

module.exports = router;
