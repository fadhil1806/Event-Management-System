'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('guru', {
      id: {
        type: Sequelize.STRING(30),
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      username: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('guru');
  }
};
