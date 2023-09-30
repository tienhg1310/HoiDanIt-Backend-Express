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
  let { email, myname, city } = req.body;
  console.log('Body = ', email, myname, city);

  connection.query(
    ` INSERT INTO Users  ( email, name, city) 
      VALUES (?, ?, ?)`,
    [email, myname, city],
    function (err, results) {
      console.log(results);
      res.send('created user!');
    }
  );
};

module.exports = { getHomePage, getName, getHome, postCreateUser };
