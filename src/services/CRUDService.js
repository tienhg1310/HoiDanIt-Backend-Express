const connection = require('../config/database');

const createUser = async (user) => {
  const [results, fields] = await connection.query(
    ` INSERT INTO Users  ( email, name, city)
      VALUES (?, ?, ?)`,
    [user.email, user.myname, user.city]
  );
  return results;
};

const getAllUsers = async () => {
  let [results, fields] = await connection.query('select * from Users');
  return results;
};

const getUserById = async (userId) => {
  let [results, fields] = await connection.query(
    'select * from Users where id = ?',
    [userId]
  );
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};

const updateUserById = async (userEdit) => {
  let [results, fields] = await connection.query(
    'UPDATE Users SET  email = ?, name =?, city = ? WHERE id = ?',
    [userEdit.email, userEdit.myname, userEdit.city, userEdit.userId]
  );
};

const deleteUserById = async (userId) => {
  let [results, fields] = await connection.query(
    'DELETE FROM Users  WHERE id = ?',
    [userId]
  );
  console.log({ results });
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  createUser,
};
