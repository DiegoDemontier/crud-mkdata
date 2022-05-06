const { clientes, documentos, documentosClientes, grupos } = require('../../database/models');
const { customerSchema } = require('../../utils/schemas');
const { badRequest } = require('../../utils/statusCode');
const errorConstructor = require('../../utils/errorHandling');

// eslint-disable-next-line max-lines-per-function
module.exports = async (data) => {
  const { nomeCliente, tipo, ativo, grupo, documentosCliente } = data;

  const { error } = customerSchema.validate({ nomeCliente, tipo, ativo, grupo, documentosCliente });
  if (error) throw errorConstructor(badRequest, error.message);

  const getGroup = await grupos.findOne({ where: { nome: grupo } });

  const cliente = await clientes.create({
    nomeCliente,
    ativo,
    tipo,
    grupoId: getGroup.id,
  });

  documentosCliente.forEach(async ({ nomeDocumento, dadoDocumento }) => {
    const documento = await documentos.create({
      nomeDocumento,
    });

    await documentosClientes.create({
      clienteId: cliente.id,
      documentoId: documento.id,
      dadoDocumento,
    });
  });

  return null;
};