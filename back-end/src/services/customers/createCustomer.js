const { clientes, documentos, documentosClientes, grupos } = require('../../database/models');
const { customerSchema } = require('../../utils/schemas');
const { Conflict, badRequest } = require('../../utils/statusCode');
const errorConstructor = require('../../utils/errorHandling');

// eslint-disable-next-line max-lines-per-function
const handleDocument = (document, client) => {
  document.forEach(async ({ nomeDocumento, dadoDocumento }) => {
    let getDocument = await documentos.findOne({ where: { nomeDocumento } });
    console.log(getDocument);
    if (!getDocument) {
      getDocument = await documentos.create({
        nomeDocumento,
      });
    }

    await documentosClientes.create({
      clienteId: client.id,
      documentoId: getDocument.id,
      dadoDocumento,
    });
  });
};

const handleError = async (data) => {
  const { nomeCliente, tipo, ativo, grupo, documentosCliente } = data;
  
  const { error } = customerSchema.validate({ nomeCliente, tipo, ativo, grupo, documentosCliente });
  if (error) throw errorConstructor(badRequest, error.message);

  // faz um array contendo os dados dos documentos cadastrados
  const arrayDocuments = documentosCliente.map(({ dadoDocumento }) => dadoDocumento);
  const documentExists = await documentosClientes
  .findAll({ where: { dadoDocumento: arrayDocuments } });

  // lança um erro caso o cliente já tenha um documento cadastrado
  if (documentExists.length > 0) throw errorConstructor(Conflict, 'Documento já cadastrado');
};

module.exports = async (data) => {
  const { nomeCliente, tipo, ativo, grupo, documentosCliente } = data;
  await handleError(data);

  const getGroup = await grupos.findOne({ where: { nome: grupo } });
  const client = await clientes.create({
    nomeCliente,
    ativo,
    tipo,
    grupoId: getGroup.id,
  });

  handleDocument(documentosCliente, client);

  return null;
};
