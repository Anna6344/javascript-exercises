const palindromes = function(str) {
  str = str.replace(/[^\w]/g, '');
  const len = str.length;
  const upStr = str.toUpperCase();
  let flag = true;
  let i = 0;
  if (len % 2 === 0) {
    for (i = 0; i < (len / 2); i++) {
      if (upStr[i] !== upStr[len - 1 - i]) {
      flag = false;
      };
    };
    return flag;
  } else if (len % 2 === 1) {
      for (i = 0; i < (len / 2 - 1); i++) {
        if (upStr[i] !== upStr[len - 1 - i]) {
          flag = false;
        };
      };
      return flag;
  };
};

// Do not edit below this line
module.exports = palindromes;
