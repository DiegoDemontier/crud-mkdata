const findAllGroups = require('../../services/groups/findAllGroups');
const { success } = require('../../utils/statusCode');

module.exports = async (req, res, next) => {
  try {
    const users = await findAllGroups();
    
    return res.status(success).json(users);
  } catch (error) {
    console.log(`ERROR FIND ALL GROUPS -> ${error.message}`);
    return next(error);
  }
};