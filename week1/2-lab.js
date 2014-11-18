//Lab1


function calculateAge(by) { // argument = birth year
    var cy = new Date().getFullYear();
    console.log("You are either " +(cy-by-1)+ " or " +(cy-by)+ ".");
}

//calculateAge(1991);


//Exercises 
//1

function max(a, b) {
    if (a>b) {
        return a;
    } else {
        return b;
    }
}

//2

function maxOfThree(a, b, c) {
    return max(max(a,b), c);
}

//maxOfThree(5, 3, 1);

//3

function isVowel(a) {
    if (a.length != 1) {
        console.log("must enter a string of length 1");
        return false;
    } else {
        var vowels = ['a', 'e', 'i', 'o', 'u'];
        for (var x in vowels) {
            if (a === vowels[x]) {
                return true;
            } else { 
                return false;
            }
        }
    }
}

// isVowel("a");

//4

function sum(array) {
    var x = 0;
    for (var i =0; i<array.length; i++) {
        x+=array[i];
    }
    return x;
}

function multiply(array) {
    var x = 1;
    for (var i =0; i<array.length; i++) {
        x*=array[i];
    }
    return x;
}

// var array = [1, 5, 3];

// multiply(array);

//5

function reverse(string) {
    var str = "";
    var x = string.length-1;
    for (x; x>=0; x--) {
        str = str + string[x];
    }
    return str;
}

// reverse("hello bro");

//6
function findLongestWord(array) {
    var x = 0;
    var str = "";
    for (var i=0; i<array.length; i++) {
        if (x < array[i].length) {
            x = array[i].length;
            str = array[i];
        }
    }
    return str;
}

var strings = ['fhkkdjf', 'dd', 'ksajfhkdjahfh', 'ddddd'];

// findLongestWord(strings);

//7

function filterLongWords(array, l) {
    var x = [];
    for (var i=0; i<array.length; i++) {
        if (array[i].length >= l) {
            x.push(array[i]);
        }
    }
    if (x.length === 0) {
        console.log("No strings exceeded " +l);
    } else {
        return x;
    }
}

//filterLongWords(strings, 20);

//Bonus questions

//1

function translate(string) {
    var ignore = "aeiou ";
    var str = ""; //string to return
    var checker = true;
    for (var i=0; i<string.length; i++) { //checking through string
        for (var n=0; n<ignore.length; n++) { //checking if char should be ignored
            if (ignore[n] === string[i]) {
                checker = false;
            }
        }
        if (checker) {
            str += (string[i] + "o" + string[i]);  
        } else {
            str += string[i]; //adds char alone
            checker = true;
        }
    }
    return str;
}

// translate("this is fun");


//2

function sortArray(array) {
    var sortedArray = [], //initializing new array
        charList = " !@#$%^&*\(\)/\';.,><\[\]\{\}0123456789abcdefghijklmnopqrstuvwxyz",
        chValue = 100,
        strToAdd = "",
        itemToRemove,
        length = array.length; //storing original length of array
    for (var t=0; t<length; t++) {
        for (var i=0; i<array.length; i++) { //iterating through each item of array
            var char = array[i][0].toLowerCase();
            for (var n=0; n<charList.length; n++) { //iterating throuh charList
                if (char === charList[n] && n < chValue) { //when a match in charList is found and first ch is lower than the tracker value
                    chValue = n; //sets chValue to new value
                    strToAdd = array[i]; //saves current array item
                    itemToRemove = i; //saves index of current array item
                    break;
                }
            }
        } //now have gone through whole array. Have the string to add to the sorted array.
        sortedArray.push(strToAdd);
        array.splice(itemToRemove, 1); //removing 
        chValue = 100; //resetting chValue
    }
    return sortedArray;
}

// var testArray = ["azoo", "Xy", "aaa", "hi"];
// sortArray(testArray);



var my_array = ["Apple", "Orange", "Banana", "Carrot", "Potato"];
 
function sortArray(array) {
	var placesWeight = new Array();
	var sortedArray = new Array();
	var weight = {
		"A":0,
		"B":1,
		"C":2,
		"D":3,
		"E":4,
		"F":5,
		"G":6,
		"H":7,
		"I":8,
		"J":9,
		"K":10,
		"L":11,
		"M":12,
		"N":13,
		"O":14,
		"P":15,
		"Q":16,
		"R":17,
		"S":18,
		"T":29,
		"U":20,
		"V":21,
		"W":22,
		"X":23,
		"Y":24,
		"Z":25
	}
	
	for (var i = 0; i < array.length; i++) {
		var letter = array[i][0];
		var letterWeight = weight[letter]-1;
		placesWeight.push(letterWeight);
	}
    for (var n=0; n<26; n++) {
        if (placesWeight.indexOf(n) != -1) {
            sortedArray.push(array[placesWeight.indexOf(n)]);
        }
    }
	return sortedArray;
}
 
sortArray(my_array);


