'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Changelog extends Model {
    static associate(models) {
      Changelog.belongsTo(models.User, {
        foreignKey: 'userId',
      });
    }
  }
  Changelog.init({
    userId: DataTypes.INTEGER,
    activity: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Changelog',
  });
  return Changelog;
};