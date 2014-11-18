"use strict";

module.exports = function(sequelize, DataTypes) {
  var ActorsMovies = sequelize.define("ActorsMovies", {
    actorId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return ActorsMovies;
};
