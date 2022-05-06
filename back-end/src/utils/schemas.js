const Joi = require('joi');

const groupSchema = Joi.object({
  nome: Joi.string().required(),
  ativo: Joi.bool().required(),
});

module.exports = {
  groupSchema,
};