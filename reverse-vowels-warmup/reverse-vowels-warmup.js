
// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:
// Given s = "hello", return "holle".

// Example 2:
// Given s = "wookiE", return "wEikoo".

function reverseVowels(s) {
  let draft = [];
  let vowels = '';
  let vowList = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < s.length; i++) {
    if (vowList.indexOf(s[i].toLowerCase()) !== -1) {
      vowels += s[i];
      draft.push('-');
    } else {
      draft.push(s[i]);
    }
  }

  vowels = vowels.split('').reverse().join('');

  let y = 0;

  for (var i = 0; i < draft.length; i++) {
    if (draft[i] === '-') {
      draft[i] = vowels[y];
      y++;
    }

  }


  return draft.join('');
}
