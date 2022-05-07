const { created } = require('../../utils/statusCode');
const getAllCustomer = require('../../services/customers/getAllCustomer');

module.exports = async (req, res, next) => {
  try {
    const customers = await getAllCustomer();
    
    return res.status(created).json(customers);
  } catch (error) {
    console.log(`ERROR GET ALL CUSTOMER -> ${error.message}`);
    return next(error);
  }
};