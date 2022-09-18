// Solution without converting to string
const isPalindrome = function (x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false;

  let reverse = 0;
  let temp = x;

  while (temp > 0) {
    reverse = 10 * reverse + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  return x === reverse ? true : false;
};

// Solution by converting to string
// const isPalindrome = function(x) {
//   return String(x) === String(x).split('').reverse().join('') ? true : false;
// };
