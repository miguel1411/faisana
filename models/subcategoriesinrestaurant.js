'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubcategoriesInRestaurant extends Model {
    static associate(models) {
      SubcategoriesInRestaurant.belongsTo(models.Restaurant);
      SubcategoriesInRestaurant.belongsTo(models.Subcategories);
      SubcategoriesInRestaurant.belongsTo(models.Category);
    }
  }
  SubcategoriesInRestaurant.init({
    restaurantId: DataTypes.INTEGER,
    subcategoryId:  DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'SubcategoriesInRestaurant',
  });
  return SubcategoriesInRestaurant;
};