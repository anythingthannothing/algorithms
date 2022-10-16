const sumOfNumberAndReverse = function (num) {
  if (!num) return true;
  for (let i = num - 1; i >= num / 2; i--) {
    if (i + reverse(i) === num) return true;
  }
  return false;
};

function reverse(num) {
  let result = 0;
  while (num > 0) {
    result = result * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return result;
}
