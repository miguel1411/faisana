'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Cocina',
        imgPath: 'https://faisanaspace-miguel.sfo3.digitaloceanspaces.com/cocina.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
      {
        name: 'Postres',
        imgPath: 'https://faisanaspace-miguel.sfo3.digitaloceanspaces.com/postre1.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
      {
        name: 'Bebidas',
        imgPath: 'https://faisanaspace-miguel.sfo3.digitaloceanspaces.com/bar.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
      {
        name: 'Mixología',
        imgPath: 'https://faisanaspace-miguel.sfo3.digitaloceanspaces.com/bar.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
      {
        name: 'Desayunos',
        imgPath: 'https://faisanaspace-miguel.sfo3.digitaloceanspaces.com/postre1.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
      {
        name: 'Cervecería',
        imgPath: 'https://faisanaspace-miguel.sfo3.digitaloceanspaces.com/altoGolfoLogo.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
