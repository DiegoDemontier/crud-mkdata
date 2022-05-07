const { success } = require('../../utils/statusCode');
const editCustomer = require('../../services/groups/editCustomer');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = { id, ...req.body };

    await editCustomer(data);
    
    return res.status(success).json({ message: 'Cliente editado com sucesso' });
  } catch (error) {
    console.log(`ERROR EDIT CUSTOMER -> ${error.message}`);
    return next(error);
  }
};