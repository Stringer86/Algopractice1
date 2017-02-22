// write a function declaration called squareMe that takes in a parameter
// and return that parameter squared
function squareMe(p) {
  return p * p;
}


// write an anonymous function literal with the variable name cubeMe that
// takes in a parameter and returns that parameter cubed
const cubeMe = (p) => {
  return Math.pow(p, 3);
}


// write a function declaration called addTwoNumbers that takes in two parameters
// and returns the sum of those parameters
function addTwoNumbers(a, b) {
  return a + b;
}


// write a function declaration called addManyNumbers that takes in any number of parameters
// and returns the sum of the input parameters
function addManyNumbers() {
  let sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }

  return sum;
}


// MUTIPLE CHOICE: INPUT THE LETTER OF THE CORRECT ANSWER INTO THE hoisting FUNCTION BELOW:
// Which one of these functions can you call above its definition in your code?
/*
    a) function iSeeALittleSilhouettoOfAMan() {
          return "Scaramouch, scaramouch will you do the fandango"
      }
    b) var ohHi = function () {
      return "Mark"
    }
    c) funct allYour (base) {
      return "are belong to us"
    }
    d) def trogdor () {
      return "the Burninator"
    }
*/

function hoisting () {
  return ("a").toLowerCase();
}
