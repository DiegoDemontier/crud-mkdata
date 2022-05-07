const Joi = require('joi');

const groupSchema = Joi.object({
  nome: Joi.string().required(),
  ativo: Joi.bool().required(),
});

const customerSchema = Joi.object({
  nomeCliente: Joi.string().required(),
  tipo: Joi.string().required(),
  ativo: Joi.bool().required(),
  grupo: Joi.string().required(),
  documentosCliente: Joi.array().items(Joi.object({
    nomeDocumento: Joi.string().required(),
    dadoDocumento: Joi.string().required(),
  })).required(),
});

module.exports = {
  groupSchema,
  customerSchema,
};