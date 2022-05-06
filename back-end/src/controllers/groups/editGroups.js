const { success } = require('../../utils/statusCode');
const editGroups = require('../../services/groups/editGroups');

module.exports = async (req, res, next) => {
  try {
    const { nome, ativo } = req.body;

    await editGroups(nome, ativo);
    
    return res.status(success).json({ message: 'Grupo editado com sucesso' });
  } catch (error) {
    console.log(`ERROR EDIT GROUPS -> ${error.message}`);
    return next(error);
  }
};