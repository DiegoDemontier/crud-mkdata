module.exports = (sequelize, DataTypes) => {
  const clientes = sequelize.define(
    'clientes',
    {
      nome: DataTypes.STRING(100),
      tipo: DataTypes.STRING(50),
      ativo: DataTypes.BOOLEAN,
    },
    {
      timestamps: false,
      createdAt: 'data_de_cadastro',
    },
  );

  clientes.associate = (models) => {
    clientes.belongsTo(models.grupos, { foreignKey: 'grupoId', as: 'grupo' });
  };

  return clientes;
};