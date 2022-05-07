const { success } = require('../../utils/statusCode');
const getAllCustomer = require('../../services/customers/getAllCustomer');

module.exports = async (req, res, next) => {
  try {
    const customers = await getAllCustomer();
    
    return res.status(success).json(customers);
  } catch (error) {
    console.log(`ERROR GET ALL CUSTOMER -> ${error.message}`);
    return next(error);
  }
};