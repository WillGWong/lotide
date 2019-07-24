const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: "${actual}" !== "${expected}"`);
  }
};

const findKeyByValue = function(obj, value) {
  let results = ""
  let objectKeyArr = Object.keys(obj)
  for (let key of objectKeyArr) {
    if (obj[key] === value) {
      return key
    }
  }
  return undefined
}

const findKeyByValueAlt = function(object, value) {
  let results = ""
  let objectKeyArr = Object.keys(object)
  let objectValueArr = Object.values(object)
  for (let i = 0; i < objectValueArr.length; i++) {
    if (objectValueArr[i] === value) {
      results = objectKeyArr[i]
      return results
    }
  }
  return undefined
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse", 
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);