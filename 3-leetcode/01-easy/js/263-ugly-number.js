const isUgly = function (n) {
  if (n <= 0) return false;

  for (let divisor of [2, 3, 5]) {
    n = divideIfDivisible(n, divisor);
  }

  return n === 1;

  function divideIfDivisible(target, divisor) {
    while (target % divisor === 0) {
      target /= divisor;
    }
    return target;
  }
};
