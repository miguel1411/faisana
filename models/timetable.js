'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Timetable extends Model {
    static associate(models) {
      Timetable.belongsTo(models.Restaurant, {
        foreignKey: 'restaurantId',
        onDelete: 'CASCADE',
      });
    }
  }
  Timetable.init({
    day: DataTypes.DATEONLY,
    hourOpen: DataTypes.TIME,
    hourClose: DataTypes.TIME,
    restaurantId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Timetable',
  });
  return Timetable;
};