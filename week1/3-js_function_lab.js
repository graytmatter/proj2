//Lab1


function calculateAge(by) { // argument = birth year
    var cy = new Date().getFullYear();
    console.log("You are either " +(cy-by-1)+ " or " +(cy-by)+ ".");
}

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

//5
function reverse(string) {
    var str = "";
    var x = string.length-1;
    for (x; x>=0; x--) {
        str = str + string[x];
    }
    return str;
}

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
            checker = true; //resets checker
        }
    }
    return str;
}

translate("this is fun");


