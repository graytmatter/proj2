"use strict";

module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    title: {
      type:DataTypes.STRING,
      validate: {
        len:[6,100] //only allows char lengths between 6 and 100
      }
    },
    author: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Book.belongsTo(db.Author); //ASSOCIATIONS!! Whoo
        
      }
    }
  });

  return Book;
};
