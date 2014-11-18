var express = require("express"),
	app = express(),
	bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); //find all static files (css, js, images) in a folder called public.
app.use(bodyParser.urlencoded({extended:true})); //so bodyParser can be used

//array to store users in
var users = [];
var count = 1; //will use to give users ids

app.get("/", function(req, res) {
	res.render('index'); 

});

app.post("/signup", function(req, res) { //to use post, need bodyParser
	console.log("THIS IS MY REQ QUERY OBJECT"); //logs: {}
	console.log(req.query);
	console.log("THIS IS MY REQ BODY OBJECT"); 
	console.log(req.body); //logs: { username: 'hi', password: 'hello' }
			//with the form names set to 'user[djfkd]', logs: { user: { username: 'adf', password: 'dfdffd' } }
	var user = {};
	user.id = count;

	user.username = req.body.user.username;
	user.password = req.body.user.password;
	users.push(user);
	count++;

	res.render('welcome', {allMyUsers:users});  //sending back from welcome page
		//all my users in the users array
});

app.get('/user/:id', function(req,res) { //for displaying info about one user
	var userID = Number(req.params.id);
	var foundUser;
	users.forEach(function(user) {
		if (user.id === userID) {
			foundUser = user;
		}
	});
	res.render('user', {user:foundUser});
});

app.listen(3000, function() {
	console.log("Server is listening on port 3000.");
});

 