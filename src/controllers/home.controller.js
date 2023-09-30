const connection = require('../config/database.js');
const { getAllUsers, getUserById } = require('../services/CRUDService.js');

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

const getUpdatePage = async (req, res) => {
  const userId = req.params.userId;
  const user = await getUserById(userId);

  res.render('update.ejs', { user: user, userId: userId });
};

module.exports = {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
};
