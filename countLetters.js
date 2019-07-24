const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: "${actual}" !== "${expected}"`);
  }
};

const countLetters = function(inputStr) {
  const results = [];
  let splitStr = inputStr.toLowerCase().split('')

  for (const char of splitStr) { 
    if(char !== " ") {
      if (results[char]) {
        results[char] += 1;
      } else {
        results[char] = 1;
      }
    }
  }
  return results;
}

//console.log(countLetters("Lighthouse in the House"))