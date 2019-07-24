const eqArrays = function(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false;
  }
  for(i = 0; i < firstArr.length; i++) {
    if (firstArr[i] === secondArr[i]) {
      return true
    } else { 
      return false
    }
  }
}


const eqObjects = function(object1, object2) {
  let objArrOne = Object.keys(object1);
  let objArrTwo = Object.keys(object2);
  if (objArrOne.length !== objArrTwo.length) {
    return false;
  }

  for (let key of objArrOne) {
   if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key]) === false) {
          return false
        }
    } else {
      if (object1[key] !== object2[key]) {
        return false
    }
  }
}
  return true
};

const inspect = require('util').inspect;

const assertArraysEqual = function(actual, expected) {
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅Assertion passed: "${inspect(actual)}" === "${inspect(expected)}"`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: "${inspect(actual)}" !== "${inspect(expected)}"`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertArraysEqual(cd, dc); 