"use strict";
module.exports = {
  up: function(migration, DataTypes, done) { //exporting out function up
    migration.createTable("Books", {
      id: {
        allowNull: false,
        autoIncrement: true, //makes value go up one each
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      author: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done); //callback that says function is done executing
  },
  down: function(migration, DataTypes, done) { //how you undo what you did
    migration.dropTable("Books").done(done);
  }
};