const express = require('express');
const {
  getHomePage,
  getName,
  getHome,
  postCreateUser,
  getCreatePage,
} = require('../controllers/home.controller.js');
const router = express.Router();

// khai bao route
router.get('/', getHomePage);
router.get('/create', getCreatePage);

router.post('/create-user', postCreateUser);

module.exports = router;
