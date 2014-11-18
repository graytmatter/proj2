document.addEventListener("DOMContentLoaded", function(event) {

//MOVEMENT FUNCTION: takes a vehicle object and increments its 'left' attribute.
	var moveRight = function($el) {
		var pos = window.getComputedStyle($el,null).getPropertyValue('left');
		var posInteger = parseInt(pos);
		$el.style.left=(posInteger+5 +"px");
	}

//VELOCITY AND MOVEMENT:
//takes a vehicle object and calls moveRight. Speed is determined by intervalX. 
//car stops moving when its left position exceeds 800 pixels.
	var goCar = function($el, intervalX) {
		var go = setInterval(function() {
			var pos = window.getComputedStyle($el,null).getPropertyValue('left');
			if (parseInt(pos) > 800) {
				clearInterval(go);
			}
			moveRight($el);
		}, intervalX);
	}

//START THE ENGINE
	var VehicleView = function(carID) { //constructor function 
		var $el = document.getElementById(carID);
		this.startRunning = function() {
			goCar($el, 10);
		};
	}

//VEHICLE OBJECT
	var Vehicle = function(carID) {
		var engine = { running: false },
			view = new VehicleView(carID);
		this.start = function() { //can use [Vehicle].start() to perform these things
			engine.running = true
			view.startRunning(); //will be called when start() is called
		};
		this.stop = function() {
			engine.running = false
			console.log("Engine is now stopped")
		};
	};

//ACTIVATES CARS: uses an array of HTML item ids to create new Vehicle objects.
//calls "start" on each vehicle.
	var DragStripView = function() {
		var vehicles = [
		'car1', 'car2', 'car3', 'car4'];
		for (var i=0; i<vehicles.length; i++) { 
			console.log(vehicles[i]);
			var hi = new Vehicle(vehicles[i]).start();
		}
	}

	window.Views = {
		DragStrip: DragStripView()
	};

	window.emmyAvailableCars = {
		Vehicle: new Vehicle() //alternatively, could have done Vehicle: Vehicle
		//this is what is being referenced in drag_race.js via 
		//"window.emmyAvailableCars.Vehicle"
	};

})