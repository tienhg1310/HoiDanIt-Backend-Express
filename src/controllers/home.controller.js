const connection = require('../config/database.js');
const { getAllUsers } = require('../services/CRUDService.js');

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render('home.ejs', { listUsers: results });
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

const getUpdatePage = (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  res.render('update.ejs');
};

module.exports = {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
};
