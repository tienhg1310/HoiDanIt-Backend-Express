const connection = require('../config/database.js');

const getHomePage = (req, res) => {
  // process data
  // call model
  return res.render('home.ejs');
};

const getName = (req, res) => {
  // process data
  // call model
  res.send('<h1>Hello Tienhg2001!</h1>');
};
const getHome = (req, res) => {
  // process data
  // call model
  res.render('sample.ejs');
};

const postCreateUser = (req, res) => {
  console.log('>>> req body= ', req.body);
  res.send('created user!');
};

module.exports = { getHomePage, getName, getHome, postCreateUser };
