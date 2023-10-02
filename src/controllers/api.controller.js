const User = require('../models/User.js');

const getUsersAPI = async (req, res) => {
  let results = await User.find({});
  return res.status(200).json({
    errorCode: 0,
    message: 'Get all user success',
    data: results,
  });
};

module.exports = { getUsersAPI };
