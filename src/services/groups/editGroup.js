const { grupos } = require('../../database/models');
const { groupSchema } = require('../../utils/schemas');
const errorConstructor = require('../../utils/errorHandling');
const { notFound, badRequest } = require('../../utils/statusCode');

module.exports = async (nome, ativo, id) => {
  const { error } = groupSchema.validate({ nome, ativo });
  if (error) throw errorConstructor(badRequest, error.message);

  const group = await grupos.findByPk(id);
  if (!group) throw errorConstructor(notFound, 'Grupo não existe');

  await grupos.update({ nome, ativo }, { where: { id } });

  return null;
};