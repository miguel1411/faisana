'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Multimedia extends Model {
    static associate(models) {
      Multimedia.belongsTo(models.Product, { as: 'product' });
    }
  }
  Multimedia.init({
    location: DataTypes.STRING,
    productId: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Multimedia',
  });
  return Multimedia;
};
