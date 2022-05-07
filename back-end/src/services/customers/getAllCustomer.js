const { clientes } = require('../../database/models');

module.exports = async () => {
  const getAllClient = await clientes.findAll(
    { 
      attributes: { exclude: 'grupoId' },
      include: [
        { association: 'grupo', attributes: { exclude: 'id' } },
        { 
          association: 'documentos',
          attributes: { exclude: 'id' },
          through: { attributes: ['dadoDocumento'] },
        },
      ],
    },
  );
  
  return getAllClient;
};