const { created } = require('../../utils/statusCode');
const createCustomer = require('../../services/customers/createCustomer');

module.exports = async (req, res, next) => {
  try {
    // const { nomeCliente, ativo, tipo, dadoDocumento, nomeDocumento } = req.body;
    await createCustomer(req.body);
    
    return res.status(created).json({ message: 'Grupo criado com sucesso' });
  } catch (error) {
    console.log(`ERROR CREATE CUSTOMER -> ${error.message}`);
    return next(error);
  }
};