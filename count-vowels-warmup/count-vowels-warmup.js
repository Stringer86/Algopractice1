
// Write a function that takes a string and returns an object
// with the vowels in that string as keys and their value is how many times
// they occurred in the string. The counter function should not care about case.
// The keys in the object should all be lowercase.
// Ex: countVowels('aAbcdade') -> {a:3,e:1}

function countVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let newStr = ''
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i].toLowerCase()) !== -1) {
      newStr = newStr + str[i].toLowerCase();
    }
  }
  
  for (let i = 0; i < newStr.length; i++) {
    if (obj[newStr[i]]) {
      obj[newStr[i]]++;
    } else {
      obj[newStr[i]] = 1;
    }
  }

  return obj;


}
