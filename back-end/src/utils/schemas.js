const Joi = require('joi');

const groupSchema = Joi.object({
  name: Joi.string().required(),
  ativo: Joi.bool.required(),
});

module.exports = {
  groupSchema,
};