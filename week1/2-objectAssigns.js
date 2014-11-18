
// object initializer 

var dog = {name: "Nelly", type: {breed: "laborador", color: "yellow"}};

function callDog(dog) {
	return "Come here, " + dog.name + "!";
}

console.log(callDog(dog)); //would print "Come here, Nelly!"

// constructor functions 
function Sandwich(meat, cheese, veg, spread, hot) {
	this.meat = meat;
	this.cheese = cheese;
	this.veg = veg;
	this.spread = spread;
	this.hot = hot;
	this.changeItem = changeItem;
}

function Veg(one, two, three) {
	this.one = one;
	this.two = two;
	this.three = three;
}

function changeItem(item, type) { //updates sandwich item of "type" to new item 
	this.type = item;
	console.log("Your " + type + " is now " + item +".");
}

var veggies = new Veg("tomato", "onion", null);

var panini = new Sandwich("turkey", "mozzarella", veggies, "pesto", true);

panini.meat = "ham"; //changes meat to ham

panini.changeItem("turkey", meat); //changes meat back to turkey and prints "Your meat is now turkey."

// object.create method

var Hat = {
	type: "fedora",
	displayType: function() {
		console.log(this.type);
	}
}

var hat1 = Object.create(Hat);
hat1.type = "sombrero";

var hat2 - Object.create(Hat); 

hat1.displayType(); //prints sombrero
hat2.displayType(); //prints fedora



