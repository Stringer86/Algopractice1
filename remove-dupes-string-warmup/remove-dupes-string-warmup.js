
// Write a function named removeDupes which takes a string and removes
// all duplicate characters in the String. Here are some examples:
//   removeDupes('AABB'); // 'AB'
//   removeDupes('AaAaBbBb'); // 'AaBb'
//   removeDupes('cAtCaT'); // 'cAtCaT'

// Write a function named removeDupesCI which takes a string and removes
// all duplicate characters regardless of capitalization. Here are some examples:
//   removeDupesCI('AABB'); // 'AB'
//   removeDupesCI('AaAaBbBb'); // 'AB'
//   removeDupesCI('cAtCaT'); // 'cAt'


function removeDupes(input){
 let output = '';

 for (let i = 0; i < input.length; i++) {
   if (output.indexOf(input[i]) === -1) {
     output += input[i];
   }
 }

 return output;
}

//CI for case insensitive
function removeDupesCI(input){
  let output = '';

  for (let i = 0; i < input.length; i++) {
    if (output.indexOf(input[i].toLowerCase()) === -1 && output.indexOf(input[i].toUpperCase()) === -1) {
      output += input[i];
    }
  }

  return output;
}
