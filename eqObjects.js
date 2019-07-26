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
    } else if (!Array.isArray(object1[key]) && !Array.isArray(object2[key])) {
      return eqObjects((object1[key]),(object2[key]))
    } else {
      if (object1[key] !== object2[key]) {
        return false
    }
  }
}

  return true
};

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false