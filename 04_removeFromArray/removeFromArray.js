const removeFromArray = function(arr, ...someArgs) {
  let argLen = someArgs.length;
  for(let i=0; i<argLen; i++){
    let ind = arr.findIndex(foundIndex);
    function foundIndex(item) {
      return item === someArgs[i];
    }
    if(ind === -1) continue;
    arr.splice(ind, 1);
  } 
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
