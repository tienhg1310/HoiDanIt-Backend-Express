const express = require('express');
const {
  getUsersAPI,
  CreateUserAPI,
  UpdateUserAPI,
  DeleteUserAPI,
} = require('../controllers/api.controller.js');

const routerAPI = express.Router();

// khai bao route
routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', CreateUserAPI);
routerAPI.put('/users', UpdateUserAPI);
routerAPI.delete('/users', DeleteUserAPI);

module.exports = routerAPI;
