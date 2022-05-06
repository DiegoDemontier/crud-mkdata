'use strict';

module.exports = {
  // eslint-disable-next-line max-lines-per-function
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('documentos_clientes', {
      clienteId: {
        field: 'cliente_id',
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'clientes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      documentoId: {
        field: 'documento_id',
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'documentos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      dado: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('documentos_clientes');
  },
};