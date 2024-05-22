const {addUserService, getUserProfileService} = require('../services/user.service');

const addUser = async (req, res) => {
  // Define addUser controller
  await addUserService(req.body)
};

const getUserProfile = async (req, res) => {
  // Define getUserProfile controller
  await addUserService(req.body)
};

module.exports = { addUser, getUserProfile };
