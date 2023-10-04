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
  deleteArrayCustomer,
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
routerAPI.delete('/customers-many', deleteArrayCustomer);

routerAPI.get('/info', (req, res) => {
  return res.status(200).json({
    data: req.query,
  });
});
routerAPI.get('/info/:name/:address', (req, res) => {
  return res.status(200).json({
    data: req.params,
  });
});

module.exports = routerAPI;
