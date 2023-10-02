const express = require('express');
const {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  getDeletePage,
} = require('../controllers/home.controller.js');
const router = express.Router();

// khai bao route
router.get('/', getHomePage);

router.get('/create', getCreatePage);
router.get('/update/:userId', getUpdatePage);
router.get('/delete/:userId', getDeletePage);

router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);
router.post('/delete-user', postDeleteUser);

module.exports = router;
