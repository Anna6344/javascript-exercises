const sumAll = function(int1, int2) {
  if(typeof int1 !== 'number' || typeof int2 !== "number" || int1 < 0 || int2 < 0) {
    return 'ERROR';
  } else if(int1 < int2) {
    let sum = int1;
    let next = int1 + 1;
    while(next <= int2){
      sum += next;
      next++
    }
   return sum;
  } else if(int2 < int1) {
    let sum = int2;
    let next = int2 + 1;
    while(next <= int1){
      sum += next;
      next++
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
