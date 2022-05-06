const { success } = require('../../utils/statusCode');
const editGroup = require('../../services/groups/editGroup');

module.exports = async (req, res, next) => {
  try {
    const { nome, ativo } = req.body;

    await editGroup(nome, ativo);
    
    return res.status(success).json({ message: 'Grupo editado com sucesso' });
  } catch (error) {
    console.log(`ERROR EDIT GROUPS -> ${error.message}`);
    return next(error);
  }
};