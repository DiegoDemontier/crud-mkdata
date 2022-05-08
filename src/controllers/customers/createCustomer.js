const { created } = require('../../utils/statusCode');
const createCustomer = require('../../services/customers/createCustomer');

module.exports = async (req, res, next) => {
  try {
    const getAllClient = await createCustomer(req.body);
    
    return res.status(created).json(getAllClient);
  } catch (error) {
    console.log(`ERROR CREATE CUSTOMER -> ${error.message}`);
    return next(error);
  }
};