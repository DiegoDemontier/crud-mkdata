const { created } = require('../../utils/statusCode');
const createCustomer = require('../../services/customers/createCustomer');

module.exports = async (req, res, next) => {
  try {
    await createCustomer(req.body);
    
    return res.status(created).json({ message: 'Cliente criado com sucesso' });
  } catch (error) {
    console.log(`ERROR CREATE CUSTOMER -> ${error.message}`);
    return next(error);
  }
};