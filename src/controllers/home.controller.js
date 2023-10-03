const connection = require('../config/database.js');
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require('../services/CRUDService.js');
const User = require('../models/user.model.js');

const getHomePage = async (req, res) => {
  let results = await User.find({});
  return res.render('home.ejs', { listUsers: results });
};
// create user

const getCreatePage = (req, res) => {
  res.render('create.ejs');
};

const postCreateUser = async (req, res) => {
  let { email, myname, city } = req.body;
  await User.create({
    email,
    name: myname,
    city,
  });

  res.redirect('/');
};

// update user
const getUpdatePage = async (req, res) => {
  const userId = req.params.userId;
  const user = await User.findById(userId).exec();

  res.render('update.ejs', { user: user, userId: userId });
};

const postUpdateUser = async (req, res) => {
  let { email, myname, city, userId } = req.body;
  await User.updateOne({ _id: userId }, { email, name: myname, city });
  res.redirect('/');
};

// delete user
const getDeletePage = async (req, res) => {
  const userId = req.params.userId;
  const user = await User.findOne({ _id: userId });
  res.render('delete.ejs', { user, userId });
};
const postDeleteUser = async (req, res) => {
  await User.deleteOne({ _id: req.body.userId });
  res.redirect('/');
};

module.exports = {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  getDeletePage,
};
