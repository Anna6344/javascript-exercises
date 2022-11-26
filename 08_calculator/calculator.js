const add = function(...nums) {
	let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
  arr.forEach((item) => {
    sum += item;
  });
  return sum;	
};

const multiply = function(arr) {
  let prod = 1;
  arr.forEach((item) => {
    prod *= item;
  });
  return prod;
};

const power = function(num1, num2) {
  let initNum = num1;
  for (let i = 1; i < num2; i++) {
    num1 *= initNum;
  };
  return num1;	
};

const factorial = function(num) {
  let fact = 1;
  for (let i = 1; i < num + 1; i++) {
    fact *= i;
  };
	return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
