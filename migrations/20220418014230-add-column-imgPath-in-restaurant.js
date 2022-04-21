'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.addColumn('products','imgPath',
    {
      type: Sequelize.STRING,
    });
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.removeColumn('products');
  }
};
