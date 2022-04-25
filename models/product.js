'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category);
      Product.belongsTo(models.Restaurant);
      Product.hasMany(models.Multimedia, { foreignKey: 'productId' });
      Product.belongsTo(models.Subcategories, { foreignKey: 'subcategoryId',} );
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    ingredient: DataTypes.STRING,
    description: DataTypes.STRING,
    imgPath: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER,
    subcategoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};