const { clientes } = require('../../database/models');
const { notFound } = require('../../utils/statusCode');
const errorConstructor = require('../../utils/errorHandling');

module.exports = async (id) => {
  const excluded = await clientes.destroy({ where: { id } });
  if (excluded === 0) throw errorConstructor(notFound, 'Cliente não encontrado');
  
  return null;
};
