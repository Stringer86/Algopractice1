// Create a function that takes a positive number and it returns its factorial.
//
// A factorial is the product of an number and all the integers below it;
// e.g., factorial four ( 4! ) is equal to 24 (4*3*2*1).
//
// if the integer is zero, return 1; factorial(0) is defined as 1
// if the integer is negative, return the string "undefined"


function factorial(a){
  if (a === 0) return 1;
  if (a < 0) return 'undefined';

  let length = a;
  let total = 1;

  for (let i = length; i > 0; i--) {
    total = i * total;
  }

  return total;
}
