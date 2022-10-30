const reverseString = function(string) {
  const arr = string.split('');
  let revArr = [];
  let order = 0;
  for(let i=string.length-1; i >= 0; i--) {
    revArr[order] = arr[i];
    order++
  }
  return revArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
