module.exports = (sequelize, DataTypes) => {
  const clientes = sequelize.define(
    'clientes',
    {
      nomeCliente: DataTypes.STRING(100),
      tipo: DataTypes.STRING(50),
      ativo: DataTypes.BOOLEAN,
    },
    {
      createdAt: 'data_cadastro',
      updatedAt: false,
    },
  );

  clientes.associate = (models) => {
    clientes.belongsTo(models.grupos, { foreignKey: 'grupoId', as: 'grupo' });
  };

  return clientes;
};