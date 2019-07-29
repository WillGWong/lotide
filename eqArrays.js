const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: "${actual}" !== "${expected}"`);
  }
};

const eqArrays = function(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false;
  }
  for(i = 0; i < firstArr.length; i++) {
    if (firstArr[i] === secondArr[i] && !Array.isArray(firstArr[i])) {
      return true;
    } else if (firstArr[i] === secondArr[i] && Array.isArray(firstArr[i])) {
      return eqArrays(firstArr[i], secondArr[i]);
    } else { 
      return false;
    }
  }
}


eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, [2, [3]], [4, 5]], [1, [2, [3]], [4, 5]]), true); // => should PASS