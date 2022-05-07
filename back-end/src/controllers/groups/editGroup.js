const { success } = require('../../utils/statusCode');
const editGroup = require('../../services/groups/editGroup');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nome, ativo } = req.body;

    await editGroup(nome, ativo, id);
    
    return res.status(success).json({ message: 'Grupo editado com sucesso' });
  } catch (error) {
    console.log(`ERROR EDIT GROUPS -> ${error.message}`);
    return next(error);
  }
};