const { created } = require('../../utils/statusCode');
const createGroup = require('../../services/groups/createGroup');

module.exports = async (req, res, next) => {
  try {
    const { nome, ativo } = req.body;

    await createGroup(nome, ativo);
    
    return res.status(created).json({ message: 'Grupo criado com sucesso' });
  } catch (error) {
    console.log(`ERROR CREATE GROUPS -> ${error.message}`);
    return next(error);
  }
};