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

const postCreateUser = async (req, res) => {
  let { email, myname, city } = req.body;
  console.log('Body = ', email, myname, city);

  const [results, fields] = await connection.query(
    ` INSERT INTO Users  ( email, name, city)
      VALUES (?, ?, ?)`,
    [email, myname, city]
  );
  console.log('check results', results);

  res.send('created user!');
};
const getCreatePage = (req, res) => {
  res.render('create.ejs');
};

module.exports = {
  getHomePage,
  getName,
  getHome,
  postCreateUser,
  getCreatePage,
};
