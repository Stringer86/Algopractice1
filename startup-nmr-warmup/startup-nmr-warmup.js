// Create a function to name your start up!!
// This function takes a string,
// and it returns that string with no vowels,
// and all spaces replaced with an underscore,
// and no Upper Case letters
//
// nmr("Industry Disruptor") => "ndstry_dsrptr"

function namer(name){
  let lower = name.toLowerCase();
  let vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  let output = ''

  for (var i = 0; i < lower.length; i++) {
    if (lower[i] === ' ') {
      output += '_'
    } else if (!vowels[lower[i]]) {
      output += lower[i];
    }
  }

  return output;
}
