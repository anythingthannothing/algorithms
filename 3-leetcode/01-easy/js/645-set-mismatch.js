const findErrorNums = function (nums) {
  let result = [];
  let n = nums.length;
  let map = new Map();

  for (let num of nums) {
    if (map.has(num)) result[0] = num;
    map.set(num, true);
  }

  for (let i = 1; i <= n; i++) {
    if (!map.has(i)) result[1] = i;
  }
  return result;
};
