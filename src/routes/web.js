const express = require('express');
const {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
} = require('../controllers/home.controller.js');
const router = express.Router();

// khai bao route
router.get('/', getHomePage);
router.get('/create', getCreatePage);
router.get('/update', getUpdatePage);

router.post('/create-user', postCreateUser);

module.exports = router;
