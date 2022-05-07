const { clientes, documentos, documentosClientes, grupos } = require('../../database/models');
const { customerSchema } = require('../../utils/schemas');
const errorConstructor = require('../../utils/errorHandling');
const { notFound, badRequest, Conflict } = require('../../utils/statusCode');

const handleDocument = (document, docId, id) => {
  document.forEach(async ({ nomeDocumento, dadoDocumento }, index) => {
    const [doc] = await documentos.findOrCreate({ where: { nomeDocumento } });

    await documentosClientes.update({ 
      dadoDocumento,
      clienteId: id,
      documentoId: doc.id,
     }, { where: { clienteId: id, documentoId: docId[index] } });
  });
};

const handleError = async (data, id) => {
  const { nomeCliente, tipo, ativo, grupo, documentosCliente } = data;

  const customer = await clientes.findByPk(id);
  if (!customer) throw errorConstructor(notFound, 'Cliente não existe');

  const { error } = customerSchema.validate({ nomeCliente, tipo, ativo, grupo, documentosCliente });
  if (error) throw errorConstructor(badRequest, error.message);

  // faz um array contendo os dados dos documentos alterados
  const arrayDocuments = documentosCliente.map(({ dadoDocumento }) => dadoDocumento);
  const customerExists = await documentosClientes
  .findAll({ where: { dadoDocumento: arrayDocuments } });

  customerExists.forEach((e) => {
    // se algum cliente já existe com o numero do documentro cadastrado, retorna um erro
    if (Number(e.dataValues.clienteId) !== Number(id)) {
      throw errorConstructor(Conflict, 'Documento já cadastrado com outro cliente');
    }
  });
};

module.exports = async (data) => {
  const { id, nomeCliente, tipo, ativo, grupo, documentosCliente } = data;
  await handleError(data, id);

  const findDocument = await documentosClientes.findAll({ where: { clienteId: id } });
  const documentsId = findDocument.map(({ documentoId }) => documentoId);

  const getGroup = await grupos.findOne({ where: { nome: grupo } });
  await clientes.update({ 
    nomeCliente,
    ativo,
    tipo,
    grupoId: getGroup.id,
   }, { where: { id } });

   handleDocument(documentosCliente, documentsId, id);

  return null;
};