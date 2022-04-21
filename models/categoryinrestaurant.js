'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoryInRestaurant extends Model {
    static associate(models) {
      CategoryInRestaurant.belongsTo(models.Restaurant);
      CategoryInRestaurant.belongsTo(models.Category);
    }
  }
  CategoryInRestaurant.init({
    restaurantId: DataTypes.NUMBER,
    categoryId: DataTypes.NUMBER,
  }, {
    sequelize,
    modelName: 'CategoryInRestaurant',
  });
  return CategoryInRestaurant;
};