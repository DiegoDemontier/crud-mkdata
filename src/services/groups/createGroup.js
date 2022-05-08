const { grupos } = require('../../database/models');
const { groupSchema } = require('../../utils/schemas');
const errorConstructor = require('../../utils/errorHandling');
const { Conflict, badRequest } = require('../../utils/statusCode');

module.exports = async (nome, ativo) => {
  const { error } = groupSchema.validate({ nome, ativo });
  if (error) throw errorConstructor(badRequest, error.message);

  const nomeExists = await grupos.findOne({ where: { nome } });
  if (nomeExists) throw errorConstructor(Conflict, 'Grupo já cadastrado');

  const group = await grupos.create({ nome, ativo });

  return group;
};