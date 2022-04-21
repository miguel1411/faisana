'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CategoryInRestaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      restaurantId: {
        type: Sequelize.INTEGER,
        references: {
          model :{
            tableName: 'Restaurants',
            key: 'id',
          },
        },
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model :{
            tableName: 'Categories',
            key: 'id',
          },
        },
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
    await queryInterface.dropTable('CategoryInRestaurants');
  }
};
