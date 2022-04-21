'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Miguel',
      lastName: 'Corona',
      email: 'mcorl95@gmail.com',
      password: 'jmcl95.2022$',
      status: true,
      createdAt: '2022-04-13 12:00:00',
      updatedAt: '2022-04-13 12:00:00'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
