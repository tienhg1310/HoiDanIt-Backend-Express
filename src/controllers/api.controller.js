const User = require('../models/User.js');

const getUsersAPI = async (req, res) => {
  let results = await User.find({});
  return res.status(200).json({
    success: true,
    payload: results,
  });
};

const CreateUserAPI = async (req, res) => {
  let { email, name, city } = req.body;
  let userResponse = await User.create({
    email,
    name,
    city,
  });

  return res.status(200).json({
    success: true,
    payload: userResponse,
  });
};

const UpdateUserAPI = async (req, res) => {
  let { email, myname, city, userId } = req.body;
  let userResponse = await User.updateOne(
    { _id: userId },
    { email, name: myname, city }
  );
  return res.status(200).json({
    success: true,
    payload: userResponse,
  });
};

const DeleteUserAPI = async (req, res) => {
  let ResponseData = await User.deleteOne({ _id: req.body.userId });
  return res.status(200).json({
    success: true,
    payload: ResponseData,
  });
};
module.exports = {
  getUsersAPI,
  CreateUserAPI,
  UpdateUserAPI,
  DeleteUserAPI,
};
