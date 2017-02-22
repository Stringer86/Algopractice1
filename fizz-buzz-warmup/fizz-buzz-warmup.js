// Task:
//   Write a function named `fizzbuzz` that returns an array with the integers from 1 to 100 (inclusive).
//
// But:
//
//   for multiples of three, insert 'Fizz' (instead of the number) into the array.
//   for multiples of five, insert 'Buzz' (instead of the number) into the array.
//   for multiples of both three and five, insert 'FizzBuzz' (instead of the number) into the array.
//

function fizzbuzz(){
  let arr = [];
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 5 === 0) {
      arr.push('Buzz')
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else {
      arr.push(i);
    }
  }

  console.log(arr);
  return arr;
}
