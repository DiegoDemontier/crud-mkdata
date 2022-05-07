module.exports = (sequelize, DataTypes) => {
  const grupos = sequelize.define(
    'grupos',
    {
      nome: DataTypes.STRING(100),
      ativo: DataTypes.BOOLEAN,
    },
    {
      timestamps: false,
    },
  );

  grupos.associate = (models) => {
    grupos.hasMany(models.clientes, { foreignKey: 'grupoId', as: 'grupos' });
  };

  return grupos;
};