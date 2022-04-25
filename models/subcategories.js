'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subcategories extends Model {
    static associate(models) {
    }
  }
  Subcategories.init({
    name: DataTypes.STRING,
    imgPath: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Subcategories',
  });
  return Subcategories;
};