'use strict';

module.exports = {
  // eslint-disable-next-line max-lines-per-function
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('documentos_clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      clienteId: {
        field: 'cliente_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'clientes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      documentoId: {
        field: 'documento_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'documentos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      dadoDocumento: {
        field: 'dado_documento',
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('documentos_clientes');
  },
};