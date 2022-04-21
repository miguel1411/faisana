'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'gourmet',
        imgPath: '/src/assets/categories/food.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
      {
        name: 'postre',
        imgPath: '/src/assets/categories/pizza.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
      {
        name: 'bebida',
        imgPath: '/src/assets/categories/bar.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
      {
        name: 'bebida-bar',
        imgPath: '/src/assets/categories/hamburguer.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
      {
        name: 'desayuno',
        imgPath: '/src/assets/categories/food.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
