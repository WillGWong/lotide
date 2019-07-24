const eqArrays = function(firstArr, secondArr) {
  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅Assertion passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: "${actual}" !== "${expected}"`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  let splitStr = sentence.split("")
  console.log(splitStr)

  for (const [i, value] of splitStr.entries()) { 
    if(value !== " ") {
      if (results[value]) {
        results[value].push(i);
      } else {
        results[value] = [i];
      }
    }
  }
  return results;
}

console.log(letterPositions("Hello World"))