"use strict";

module.exports = function(sequelize, DataTypes) {
  var Actor = sequelize.define("Actor", {
    name: DataTypes.STRING,
    birthCity: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Actor.hasMany(models.Movie, {onDelete: "NO ACTION"});
      }
    }
  });

  return Actor;
};
