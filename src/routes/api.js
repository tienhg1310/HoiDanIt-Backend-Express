const express = require('express');
const { getUsersAPI } = require('../controllers/api.controller.js');

const routerAPI = express.Router();

// khai bao route
routerAPI.get('/users', getUsersAPI);

module.exports = routerAPI;
