'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Restaurants', [
      {
        name: 'faisana',
        street: 'Av.Zaragoza 17',
        status: true,
        imgPath: '/src/assets/img/faisanaLogo.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00'
      },
      {
        name: 'bohemio',
        street: 'Av.Obregón y 8',
        status: true,
        imgPath: '/src/assets/img/bohemioLogo.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00'
      },
      {
        name: 'alto golfo',
        street: 'Av.Zaragoza 17',
        status: true,
        imgPath: '/src/assets/img/altoGolfoLogo.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Restaurants', null, {});
  }
};
