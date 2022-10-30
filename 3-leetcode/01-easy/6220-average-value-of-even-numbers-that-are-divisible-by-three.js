const averageValue = function (nums) {
  nums = nums.filter((v) => v % 2 === 0 && v % 3 === 0);
  return !nums.length
    ? 0
    : Math.floor(nums.reduce((acc, v) => acc + v) / nums.length);
};
