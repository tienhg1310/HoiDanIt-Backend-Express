const Customer = require('../models/customer.model.js');

const createCustomerService = async (customerData) => {
  try {
    let results = await Customer.create({
      name: customerData.name,
      address: customerData.address,
      phone: customerData.phone,
      email: customerData.email,
      description: customerData.description,
      image: customerData.image,
    });
    return results;
  } catch (error) {
    return error;
  }
};
const aqp = require('api-query-params');

const createArrayCustomerService = async (customerData) => {
  try {
    let result = await Customer.insertMany(customerData);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getAllCustomerService = async (limit, page, name, queryString) => {
  try {
    let result = null;
    if (limit && page) {
      let offset = (page - 1) * limit;
      const { filter } = aqp(queryString);
      delete filter.page;
      console.log('check filter: ', filter);

      result = await Customer.find(filter).skip(offset).limit(limit).exec();
    } else {
      result = await Customer.find({});
    }
    return result;
  } catch (error) {
    return error;
  }
};
const postUpdateCustomerService = async (id, name, email, address) => {
  try {
    let result = await Customer.updateOne(
      { _id: id },
      { name, email, address }
    );
    return result;
  } catch (error) {
    return error;
  }
};

const deleteACustomerService = async (id) => {
  try {
    let result = await Customer.findByTien();
    return result;
  } catch (error) {
    return error;
  }
};

const deleteArrayCustomerService = async (ids) => {
  try {
    let result = await Customer.delete({ _id: { $in: ids } });
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomerService,
  postUpdateCustomerService,
  deleteACustomerService,
  deleteArrayCustomerService,
};
