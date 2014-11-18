"use strict";

module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define("Movie", {
    name: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Movie.hasMany(models.Actor, {onDelete: "NO ACTION"});
      }
    }
  });

  return Movie;
};
