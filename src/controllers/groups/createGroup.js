const { created } = require('../../utils/statusCode');
const createGroup = require('../../services/groups/createGroup');

module.exports = async (req, res, next) => {
  try {
    const { nome, ativo } = req.body;

    const group = await createGroup(nome, ativo);
    
    return res.status(created).json(group);
  } catch (error) {
    console.log(`ERROR CREATE GROUPS -> ${error.message}`);
    return next(error);
  }
};