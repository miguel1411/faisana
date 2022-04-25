'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Subcategories', [
      {
        name: 'Entradas',
        imgPath: 'https://faisanaspace-miguel.sfo3.digitaloceanspaces.com/faisanaLogo.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
      {
        name: 'Inflada sope de maíz',
        imgPath: 'https://faisanaspace-miguel.sfo3.digitaloceanspaces.com/faisanaLogo.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
      {
        name: 'Tacos',
        imgPath: 'https://faisanaspace-miguel.sfo3.digitaloceanspaces.com/faisanaLogo.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
      {
        name: 'Tostadas al grill',
        imgPath: 'https://faisanaspace-miguel.sfo3.digitaloceanspaces.com/faisanaLogo.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
      {
        name: 'Ensaladas',
        imgPath: 'https://faisanaspace-miguel.sfo3.digitaloceanspaces.com/faisanaLogo.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
      {
        name: 'Pastas spaghetti',
        imgPath: 'https://faisanaspace-miguel.sfo3.digitaloceanspaces.com/faisanaLogo.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
      {
        name: 'Costillas ahumadas',
        imgPath: 'https://faisanaspace-miguel.sfo3.digitaloceanspaces.com/faisanaLogo.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
      {
        name: 'Pizzas a la leña',
        imgPath: 'https://faisanaspace-miguel.sfo3.digitaloceanspaces.com/faisanaLogo.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
      {
        name: 'Burgers',
        imgPath: 'https://faisanaspace-miguel.sfo3.digitaloceanspaces.com/faisanaLogo.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
      {
        name: 'Siliders/ mini Burgers',
        imgPath: 'https://faisanaspace-miguel.sfo3.digitaloceanspaces.com/faisanaLogo.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
      {
        name: 'Sandwiches',
        imgPath: 'https://faisanaspace-miguel.sfo3.digitaloceanspaces.com/faisanaLogo.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
      {
        name: 'Postres',
        imgPath: 'https://faisanaspace-miguel.sfo3.digitaloceanspaces.com/faisanaLogo.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
      {
        name: 'Cortes de carne',
        imgPath: 'https://faisanaspace-miguel.sfo3.digitaloceanspaces.com/faisanaLogo.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
      {
        name: 'Postres',
        imgPath: 'https://faisanaspace-miguel.sfo3.digitaloceanspaces.com/faisanaLogo.jpg',
        createdAt: '2022-04-13 12:00:00',
        updatedAt: '2022-04-13 12:00:00',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Subcategories', null, {});
  }
};
