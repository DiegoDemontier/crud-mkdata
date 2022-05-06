const { created } = require('../../utils/statusCode');
const createGroups = require('../../services/groups/createGroups');

module.exports = async (req, res, next) => {
  try {
    const { nome, ativo } = req.body;

    await createGroups(nome, ativo);
    
    return res.status(created).json({ message: 'Grupo criado com sucesso' });
  } catch (error) {
    console.log(`ERROR CREATE GROUPS -> ${error.message}`);
    return next(error);
  }
};