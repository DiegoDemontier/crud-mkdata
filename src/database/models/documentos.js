module.exports = (sequelize, DataTypes) => {
  const documentos = sequelize.define(
    'documentos',
    {
      nomeDocumento: DataTypes.STRING(100),
    },
    {
      timestamps: false,
    },
  );

  return documentos;
};