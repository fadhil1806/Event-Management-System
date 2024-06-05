'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('event', {
      id: {
        type: Sequelize.STRING(30),
        allowNull: false,
        primaryKey: true
      },
      guru_id: {
        type: Sequelize.STRING(30),
        allowNull: false,
        references: {
          model: 'guru',
          key: 'id'
        }
      },
      name: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      category: {
        type: Sequelize.STRING(30),
        allowNull: false,
        references: {
          model: 'category',
          key: 'name'
        }
      },
      event_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      location: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      max_participant: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(35),
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
    await queryInterface.dropTable('event');
  }
};
