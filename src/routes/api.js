const express = require('express');
const {
  getUsersAPI,
  CreateUserAPI,
  UpdateUserAPI,
  DeleteUserAPI,
  postUploadSingleFileAPI,
} = require('../controllers/api.controller.js');
const {
  postCreateCustomer,
  postCreateArrayCustomer,
  getAllCustomer,
  postUpdateCustomer,
  deleteACustomer,
} = require('../controllers/customer.controller.js');

const routerAPI = express.Router();

// khai bao route
routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', CreateUserAPI);
routerAPI.put('/users', UpdateUserAPI);
routerAPI.delete('/users', DeleteUserAPI);
routerAPI.post('/file', postUploadSingleFileAPI);

routerAPI.get('/customers', getAllCustomer);
routerAPI.post('/customers', postCreateCustomer);
routerAPI.post('/customers-many', postCreateArrayCustomer);
routerAPI.put('/customers', postUpdateCustomer);
routerAPI.delete('/customers', deleteACustomer);

module.exports = routerAPI;
