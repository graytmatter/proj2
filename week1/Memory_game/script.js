
document.addEventListener("DOMContentLoaded", function(event) {
//INITIALIZING GAME.
//ARRAY OF SQUARES
	var squareArray = document.getElementsByClassName("square");

//SCORE UPDATER DIV
	var scoreDiv = document.getElementById("score");

//ARRAY OF IMAGES. Each item is associated with a class defined in CSS that assigns a different
//background. This is used to identify the different memory "cards".
	var imageArray = ["doge", "sherman", "deal", "tacos", "goldens", "ron", "space", "fiddy", "doge", "sherman", "deal", "tacos", "goldens", "ron", "space", "fiddy"];

//FUNCTION TO SHUFFLE IMAGE ARRAY
	function shuffle(array) {
		var copy = [], n = array.length, i;
		while (n) { 
			i = Math.floor(Math.random() * array.length); // Randomly selects array item
			if (i in array) { // If the item exits
				copy.push(array[i]); //Add the item to a new array
				delete array[i]; //delete the item in the previous array
				n--; //
			}
		}
		return copy;
	}

//SHUFFLED ARRAY OF IMAGES
	var shuffledImages = shuffle(imageArray);
	console.log("shuffled array: " +shuffledImages); //asks console to log the shuffled array (optional)

//FUNCTION TO ASSIGN IMAGES TO SQUARES
	function assignBackgrounds(squads, imgs) { //squads=array of squares; imgs=array of images
		var i = 0;
		for (i; i<squads.length; i++) {
			squads[i].classList.add(imgs[i]); //assigns items in img array as classes to the squares
		}
	}
	assignBackgrounds(squareArray, shuffledImages);

//DONE INITIALIZING.

//VARIABLES
	var winChecker = 0; //tracks matches to determine when game is complete
	var id1; //stores first square clicked
	var id2; //stores second square clicked
	var score=0; //tracks number of clicks

//GAME BEHAVIOR.
//Each square starts out with the class identifying its image as well as the class "hide", which effectively
//hides the image class with a white background.
//When a match is made, the squares will be given the class "complete".
//Each time a square is clicked, multiple checks occur.
// 1) if the square has already been matched (aka has the class "complete"), do nothing.
// 2) if the score is currently an even number, this means the square being cicked is the first of a pair.
//		remove the "hide" class to display its image, and store this square in a variable to use for comparison.
// 3) if the score is currently an odd number, reveal the second square. 
// 4) if the two revealed squares do not match, aka do not share an image class (determined using the
//		'isSame' function), reassign the "hide" class to the squares.
// 5) otherwise, assign the "complete" class to the squares. 
// 6) then, if all squares have been completed (determined using the winChecker variable), alert the user
//		and reset the game.
	for (var i=0; i<squareArray.length; i++) { //FOR LOOP ITERATING THROUGH ARRAY OF SQUARES
		squareArray[i].addEventListener("click", function() { //LISTENING TO EACH SQUARE
			if (this.classList[2] != "complete") { //IF SQUARE HASN'T BEEN CLICKED
				if (score%2 === 0) { //IF IS THE FIRST SQUARE REVEALED
					this.classList.remove("hide"); //reveal the square
					id1 = this; //id1 is the first square clicked
					score++; //add to score
					scoreDiv.innerHTML = ("Score: "+score); //update score div
				} else if (this != id1) { //IF IS THE SECOND SQUARE REVEALED
					score++; //add to score
					scoreDiv.innerHTML = ("Score: "+score); //update score div
					this.classList.remove("hide"); //reveal square 2
					id2 = this; //assign square 2 to id2
					if (!isSame(id1, id2)) { //IF THERE IS NOT A MATCH
						setTimeout(function() {
							id1.classList.add("hide"); //re-add the hide class to both squares
							id2.classList.add("hide");
						}, 400); //wait 400 milliseconds
					} else { //IF THERE IS A MATCH
						id1.classList.add("complete");//add complete class to both squares
						id2.classList.add("complete");
						winChecker++; //add to the win checker
						if (winChecker === 8) { //CHECKING IF USER HAS WON
							alert("you win with a score of "+score+"!");
							for (var n in squareArray) { //for each square
								squareArray[n].classList.add("hide"); //...reset board by adding the hide class to all squares...
								squareArray[n].classList.remove("complete");//...and removing the complete class...
								score = 0; //and resetting score to 0.
								scoreDiv.innerHTML = ("Score: "+score);
							}
							// var newShuffledImages = shuffle(shuffledImages); //reshuffles images
							// assignBackgrounds(squareArray, newShuffledImages);  //reassigns squares
						}
					}
				}
			}
		});
	};

//FUNCTION TO COMPARE A PAIR OF SQUARES.
//A match is determined by comparing the second item in their "classList" arrays.
//Returns true if there is a match; returns false otherwise.
	function isSame(sq1, sq2) {
		var c1 = sq1.classList;
		var c2 = sq2.classList;
		if (c1[1] === c2[1]) {
			return true;
		} else {
			return false;
		}
	}

});