module.exports = (sequelize, DataTypes) => {
  const documentos = sequelize.define(
    'documentos',
    {
      nome: DataTypes.STRING(100),
    },
    {
      timestamps: false,
    },
  );

  return documentos;
};