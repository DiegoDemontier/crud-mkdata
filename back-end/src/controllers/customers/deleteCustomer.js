const { success } = require('../../utils/statusCode');
const deleteCustomer = require('../../services/customers/deleteCustomer');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    await deleteCustomer(id);
    
    return res.status(success).json({ message: 'Cliente deletado com sucesso' });
  } catch (error) {
    console.log(`ERROR DELETE CUSTOMER -> ${error.message}`);
    return next(error);
  }
};