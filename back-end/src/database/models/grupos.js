module.exports = (sequelize, DataTypes) => {
  const grupos = sequelize.define(
    'grupos',
    {
      name: DataTypes.STRING(100),
      ativo: DataTypes.BOOLEAN,
    },
    {
      timestamps: false,
    },
  );

  return grupos;
};