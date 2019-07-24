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
    } else {
      if (object1[key] !== object2[key]) {
        return false
    }
  }
}

  return true
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false