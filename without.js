const without = function(source, itemsToRemove){
  for (i = 0; i < source.length; i++){
    for (j = 0; j < itemsToRemove.length; j++){
      if (itemsToRemove[j] === source[i]) {
        source.splice(i,1);
      }
    }
  }
return source
}

module.exports = without

//assertArraysEqual(without([1, 2, 3], [1]), [2,3])
//assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])