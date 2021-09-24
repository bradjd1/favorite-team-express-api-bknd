'use strict';
const {
  Model
} = require('sequelize');
// const { combineTableNames } = require('sequelize/types/lib/utils');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Player.belongsTo(models.Team, {foreignKey: "teamId"});
    }
  };
  Player.init({
    name: DataTypes.STRING,
    teamId: DataTypes.INTEGER,
    position: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};