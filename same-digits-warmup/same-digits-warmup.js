

// Write a function that takes two positive numbers and returns a Boolean that says
// if they have the same digits as each other (they have the same numbers in each)
// Ex: equivalent(123,321) -> returns true
// Ex: equivalent(413,1453) -> returns false
// Ex: equivalent(210001,121) -> return true

function sameDigits(a,b) {
  let newA = a.toString();
  newA = newA.split('');
  let newB = b.toString();
  newB = newB.split('');

  if (newA.length > newB.length) {
    for (let i = 0; i < newA.length; i++) {
      if (newB.indexOf(newA[i]) === -1 && newA[i] !== '0') return false;
    }
    return true;
  } else {
    for (let i = 0; i < newB.length; i++) {
      if (newA.indexOf(newB[i]) === -1 && newB[i] !== '0') return false;
    }
    return true;
  }

}
