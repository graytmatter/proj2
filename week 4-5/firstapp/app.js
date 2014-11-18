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
  res.render('home');
});

// db.Book.findAll().done(function(books){
  // do something with my array of books
//})

// db.Book.find({
  // where:{title:"Taco"}
  // }).success(function(book){
  // do something with an individual book
// })

// db.Book.create({
    // title: "book1",
    // author: "Elie"
// }).success(function(book){ // do something here })

//Index
app.get('/books', function(req, res){
  db.Book.findAll().done(function(err,books) {
    res.render('library/index', {allBooks: books});
  });
});

//New
app.get('/books/new', function(req, res){
  res.render("library/new", {title:"", author:""});
});

//Create
app.post('/books', function(req, res) {
	var title = req.body.book.title;
    var author = req.body.book.author;
  db.Book.create({
    title: title,
    author: author
  }).done(function(err){
  	if(err) { //error check
  		var errMsg = "title must have 6 or more chars"; //error message
  		res.render('library/new', {errMsg: errMsg, title:title, author:author}); //rereders this page
  	}
    res.redirect('/books');
  });
});

//Show
app.get('/books/:id', function(req, res) {
  var id = req.params.id;
  db.Book.find(id).done(function(err,book){
    res.render('library/show', {book:book});
  });
});

//Edit
app.get('/books/:id/edit', function(req, res) {
  //find our book
  var id = req.params.id;
  db.Book.find(id).done(function(err,book){
      res.render('library/edit', {book: book});
  });
});

//Update
app.put('/books/:id', function(req, res) {
  var id = req.params.id;
  var title = req.body.book.title;
   var author = req.body.book.author;
  db.Book.find(id).done(function(err, book){
    book.updateAttributes({
      title: title,
      author: author
    }).done(function(err){
    	if(err) { //error check
  		var errMsg = "title must have 6 or more chars"; //error message
  		res.render('library/new', {errMsg: errMsg, book: book, title:title, author:author}); //rereders this page
  	}
      res.redirect('/books');
    });
  });
});

//Delete
app.delete('/books/:id', function(req, res) {
  var id = req.params.id;
  db.Book.find(id).done(function(err,book){
    book.destroy().done(function(err){
      res.redirect('/books');
    });
  });
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});