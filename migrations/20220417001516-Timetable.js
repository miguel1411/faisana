'use strict';

const { sequelize } = require("../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Timetables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      restaurantId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Restaurants',
            key: 'id',
            as: 'restaurantId',
          },
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      day: {
        type: Sequelize.DATEONLY
      },
      hourOpen: {
        type: Sequelize.TIME
      },
      hourClose: {
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Timetables');
  }
};