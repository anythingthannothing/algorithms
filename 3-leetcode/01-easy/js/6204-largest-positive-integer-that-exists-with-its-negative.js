const findMaxK = function (nums) {
  let map = new Map();
  let max = -Infinity;

  for (let num of nums) {
    if (num < 0) map.set(num, true);
  }

  for (let num of nums) {
    if (num > 0 && map.has(-num)) max = Math.max(max, num);
  }
  return max === -Infinity ? -1 : max;
};
