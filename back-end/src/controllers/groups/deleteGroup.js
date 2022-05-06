const { success } = require('../../utils/statusCode');
const deleteGroup = require('../../services/groups/deleteGroup');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    await deleteGroup(id);
    
    return res.status(success).json({ message: 'Grupo deletado com sucesso' });
  } catch (error) {
    console.log(`ERROR DELETE GROUPS -> ${error.message}`);
    return next(error);
  }
};