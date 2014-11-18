var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));//allows us to use delete


//Library
books = [];
counter = 0;
//Book constructor
function Book(title, author) {
	counter++;
	this.id = counter;
	this.title = title;
	this.author = author;
	books.push(this);
}
Book.delete = function(id) {
	books.forEach(function(book) {
		if (book.id === Number(id)) {
			books.splice(books.indexOf(book), 1);
		}
	});
};
Book.findById = function(id) {
	books.forEach(function(book) {
		if (Number(id) === book.id) {
			return book;
		}
	});
};

//Seeding database aka array
function seed() {
	new Book("Be Here Now", "Ram Dass");
	new Book("Ishmael", "Daniel Quinn");
	new Book("Harry Potter", "J.K. Rowling");
}
seed();

//Index
app.get('/', function(req, res){
  res.render('library/index', {books: books});
});

//New
app.get('/books/new', function(req, res) {
	res.send("new book form");
});

//Create
app.post('/books', function(req, res) {
	//create info from res.body, push into...
});

//Show
app.get('/books/:id', function(req, res) {
	res.send("updating book" +req.params.id);
});

//Edit
app.get('/books/:id/edit', function(req, res) {
	var id = req.params.id;
	getBook = Book.findById(id);
	res.render('library/edit', {book: getBook});
});

//Update
app.put('/books/:id', function(req, res) {
	res.send("updated book "+req.params.id);
});

//Delete
app.delete('/books/:id', function(req, res) {
	Book.delete(req.params.id);
	res.redirect("/");
});



var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});