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

module.exports = countLetters
//console.log(countLetters("Lighthouse in the House"))