const { uploadSingleFile } = require('../services/file.service.js');
const {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomerService,
  postUpdateCustomerService,
  deleteACustomerService,
  deleteArrayCustomerService,
} = require('../services/customer.service.js');

const aqp = require('api-query-params');

module.exports = {
  postCreateCustomer: async (req, res) => {
    let { name, address, phone, email, description } = req.body;
    let imageUrl = '';

    if (!req.files || Object.keys(req.files).length === 0) {
      // do nothing
      console.log('file not oke');
    }
    let results = await uploadSingleFile(req.files.image);
    imageUrl = results.path;

    let customerData = {
      name,
      address,
      phone,
      email,
      description,
      image: imageUrl,
    };
    try {
      let customer = await createCustomerService(customerData);
      return res.status(200).json({
        EC: 0,
        data: customer,
      });
    } catch (error) {
      return res.status(200).json({
        EC: 1,
        data: error,
      });
    }
  },

  postCreateArrayCustomer: async (req, res) => {
    try {
      let resResult = await createArrayCustomerService(req.body.customers);
      return res.status(200).json({
        EC: 0,
        data: resResult,
      });
    } catch (error) {
      return res.status(400).json({
        EC: 1,
        data: error,
      });
    }
  },

  getAllCustomer: async (req, res) => {
    let { page, limit } = req.query;
    let result;
    if (limit && page) {
      try {
        result = await getAllCustomerService(page, req.query);
        return res.status(200).json({
          EC: 0,
          data: result,
        });
      } catch (error) {
        return res.status(400).json({
          EC: 1,
          data: error,
        });
      }
    } else {
      try {
        result = await getAllCustomerService();
        return res.status(200).json({
          EC: 0,
          data: result,
        });
      } catch (error) {
        return res.status(400).json({
          EC: 1,
          data: error,
        });
      }
    }
  },
  postUpdateCustomer: async (req, res) => {
    let { id, name, email, address } = req.body;

    try {
      let result = await postUpdateCustomerService(id, name, email, address);
      return res.status(200).json({
        EC: 0,
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        EC: 1,
        data: error,
      });
    }
  },
  deleteACustomer: async (req, res) => {
    try {
      let result = await deleteACustomerService(req.body.id);
      return res.status(200).json({
        EC: 0,
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        EC: 1,
        data: error,
      });
    }
  },
  deleteArrayCustomer: async (req, res) => {
    let ids = req.body.customersId;
    console.log(ids);
    try {
      let result = await deleteArrayCustomerService(ids);
      return res.status(200).json({
        EC: 0,
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        EC: 1,
        data: error,
      });
    }
  },
};
