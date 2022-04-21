'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.addColumn('Products','imgPath',
    {
      type: Sequelize.STRING,
    });
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.removeColumn('Products', 'imgPath');
  }
};
