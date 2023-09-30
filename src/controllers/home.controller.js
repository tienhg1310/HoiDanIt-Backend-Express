const connection = require('../config/database.js');
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require('../services/CRUDService.js');

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render('home.ejs', { listUsers: results });
};
// create user
const getCreatePage = (req, res) => {
  res.render('create.ejs');
};

const postCreateUser = async (req, res) => {
  console.log('Body = ', email, myname, city);

  const [results, fields] = await connection.query(
    ` INSERT INTO Users  ( email, name, city)
      VALUES (?, ?, ?)`,
    [email, myname, city]
  );
  console.log('check results', results);

  res.send('created user!');
};

// update user
const getUpdatePage = async (req, res) => {
  const userId = req.params.userId;
  const user = await getUserById(userId);

  res.render('update.ejs', { user: user, userId: userId });
};

const postUpdateUser = async (req, res) => {
  let { email, myname, city, userId } = req.body;
  const userEdit = { email, myname, city, userId };
  await updateUserById(userEdit);
};

// delete user
const getDeletePage = async (req, res) => {
  const userId = req.params.userId;
  const user = await getUserById(userId);
  res.render('delete.ejs', { user, userId });
};
const postDeleteUser = async (req, res) => {
  await deleteUserById(req.body.userId);
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
