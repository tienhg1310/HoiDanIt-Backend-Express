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
const createArrayCustomerService = async (customerData) => {
  try {
    let result = await Customer.insertMany(customerData);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getAllCustomerService = async () => {
  try {
    let result = await Customer.find({});
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
    let result = await Customer.deleteById(id);
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
};
