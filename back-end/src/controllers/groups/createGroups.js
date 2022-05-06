const { created } = require('../../utils/statusCode');
const createGroups = require('../../services/createGroups');

module.exports = async (req, res, next) => {
  try {
    const { nome, ativo } = req.body;

    await createGroups(nome, ativo);
    
    return res.status(created).json({ message: 'Groups created successfully' });
  } catch (error) {
    console.log(`ERROR CREATE GROUPS -> ${error.message}`);
    return next(error);
  }
};