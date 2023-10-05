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
const {
  postCreateProject,
  getAllProject,
  deleteProject,
  updateProject,
} = require('../controllers/project.controller.js');
const {
  postCreateTask,
  getAllTask,
  updateTask,
  deleteTask,
} = require('../controllers/task.controller.js');

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

routerAPI.post('/projects', postCreateProject);
routerAPI.get('/projects', getAllProject);
routerAPI.put('/projects', updateProject);
routerAPI.delete('/projects', deleteProject);

routerAPI.post('/tasks', postCreateTask);
routerAPI.get('/tasks', getAllTask);
routerAPI.put('/tasks', updateTask);
routerAPI.delete('/tasks', deleteTask);

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
