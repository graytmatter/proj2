"use strict"

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    db = require('./models/index');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

//Home
app.get('/', function(req, res){
	db.Post.findAll().done(function(err,posts) {
		res.render('home', {posts:posts});
	});
});

//New
app.get('/posts/new', function(req,res) {
	res.render('new');
});





var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});