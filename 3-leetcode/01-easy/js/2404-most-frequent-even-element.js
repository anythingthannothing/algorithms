const mostFrequentEven = function (nums) {
  let result = [];
  let map = new Map();

  for (let num of nums) {
    if (num % 2 === 0) map.set(num, map.get(num) + 1 || 1);
  }

  if (map.size === 0) return -1;

  for (let [key, value] of map) {
    result.push([key, value]);
  }

  return result.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return b[1] - a[1];
  })[0][0];
};
