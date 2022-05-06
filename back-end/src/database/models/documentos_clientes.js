// eslint-disable-next-line max-lines-per-function
module.exports = (sequelize, DataTypes) => {
  const documentosClientes = sequelize.define(
    'documentosClientes',
    {
      dado: DataTypes.STRING(100),
    },
    { 
      timestamps: false,
      tableName: 'documentos_clientes',
    },
  );

  documentosClientes.associate = (models) => {
    models.clientes.belongsToMany(models.documentos, {
      foreignKey: 'clienteId',
      as: 'documentos',
      through: documentosClientes,
    });
    models.documentos.belongsToMany(models.clientes, {
      foreignKey: 'documentoId',
      as: 'clientes',
      through: documentosClientes,
    });
  };

  return documentosClientes;
};