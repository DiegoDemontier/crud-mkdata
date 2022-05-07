const { clientes, documentos, documentosClientes, grupos } = require('../../database/models');
const { customerSchema } = require('../../utils/schemas');
const errorConstructor = require('../../utils/errorHandling');
const { notFound, badRequest, Conflict } = require('../../utils/statusCode');

/* const handleDocument = (document, id) => {
  document.forEach(async ({ nomeDocumento, dadoDocumento }) => {
    const [doc] = await documentos.findOrCreate({ where: { nomeDocumento } });

    await documentosClientes.update({ 
      dadoDocumento,
     }, { where: { clienteId: id } });
  });
}; */

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
  await handleError(data);
  const { id, nomeCliente, tipo, ativo, grupo, documentosCliente } = data;

  const customer = await grupos.findByPk(id);
  if (!customer) throw errorConstructor(notFound, 'Cliente não existe');

  const getGroup = await grupos.findOne({ where: { nome: grupo } });
  await clientes.update({ 
    nomeCliente,
    ativo,
    tipo,
    grupoId: getGroup.id,
   }, { where: { id } });

   // await handleDocument(documentosCliente, id);

  return null;
};