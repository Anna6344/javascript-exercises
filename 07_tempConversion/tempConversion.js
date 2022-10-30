const ftoc = function(degF) {
  let degC = (degF - 32) * 5 / 9;
  if(Number.isInteger(degC)){
    return degC;
  } else return Number(degC.toFixed(1));
};

const ctof = function(degC) {
  let degF = degC * (9 / 5) + 32;
  if(Number.isInteger(degF)) {
    return degF;
  } else return Number(degF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
