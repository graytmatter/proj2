 "use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development"; 
//^environment
var config    = require(__dirname + '/../config/config.json')[env]; 
//^bringing in contents of config json
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db        = {};
//^what we will export out. an object that has all of our models in it.
require("locus");

fs //file system. module build into node.
  .readdirSync(__dirname) 
  //dirname: dynamic directory location that changes when run on diff computers
  //dirname = an array of ['book.js', 'index,js']
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  //filter that returns an array with files that aren't hidden or are index.js
  //in this case just returns ['book.js']
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    //path.join(etc) returns the directory address of the file
    //sequelize import takes the path and then creates an object w that
    db[model.name] = model;
  //building the db object and putting the model inside of it
  //db with a key of Book is now equal to the model
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
