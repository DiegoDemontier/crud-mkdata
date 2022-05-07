const { grupos } = require('../../database/models');
const { notFound } = require('../../utils/statusCode');
const errorConstructor = require('../../utils/errorHandling');

module.exports = async (id) => {
  const excluded = await grupos.destroy({ where: { id } });
  if (excluded === 0) throw errorConstructor(notFound, 'Grupo não encontrado');
  
  return null;
};
