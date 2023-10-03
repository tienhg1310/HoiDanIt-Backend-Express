const User = require('../models/user.model.js');
const { uploadSingleFile } = require('../services/file.service');
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

const postUploadSingleFileAPI = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No file were Upload!!!');
  }
  let results = await uploadSingleFile(req.files.image);
  console.log('>>>Check result', results);
  return res.send({
    EC: 0,
    data: results,
  });
};
module.exports = {
  getUsersAPI,
  CreateUserAPI,
  UpdateUserAPI,
  DeleteUserAPI,
  postUploadSingleFileAPI,
};
