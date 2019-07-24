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

const flatten = function(outerArr) {
  let newArr = [];
  for (let i = 0; i < outerArr.length; i++) {
    if (Array.isArray(outerArr[i]) === true) {
      for (let j = 0; j < outerArr[i].length; j++) {
        newArr.push(outerArr[i][j]);
      }
    } else {
      newArr.push(outerArr[i]);
    }
  }
  return newArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);