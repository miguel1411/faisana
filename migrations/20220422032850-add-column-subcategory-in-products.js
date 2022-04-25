'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Products', 'subcategoryId',
    {
      type: Sequelize.INTEGER,
      references: {
        model : {
          tableName: 'Subcategories',
          key: 'id',
        },
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Products', 'subcategoryId');
  }
};
