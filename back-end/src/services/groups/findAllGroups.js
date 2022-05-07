const { grupos } = require('../../database/models');

module.exports = async () => {
  const getGroups = await grupos.findAll({});
  
  return getGroups;
};