const connection = require('../config/database.js');

const getHomePage = (req, res) => {
  // process data
  // call model
  let users = [];
  connection.query('SELECT * FROM Users u', function (err, results, fields) {
    users = results;
    console.log('>>> result', results);
    console.log('>>> Check users =', users);
    res.send(JSON.stringify(users));
  });
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

module.exports = { getHomePage, getName, getHome };
