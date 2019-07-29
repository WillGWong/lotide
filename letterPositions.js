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

module.exports = letterPositions

//console.log(letterPositions("Hello World"))