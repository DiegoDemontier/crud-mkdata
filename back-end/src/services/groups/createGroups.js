const { grupos } = require('../../database/models');

module.exports = async (nome, ativo) => {
  await grupos.create({ nome, ativo });

  return null;
};