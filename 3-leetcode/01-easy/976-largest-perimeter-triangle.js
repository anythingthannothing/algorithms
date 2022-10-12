const largestPerimeter = function (nums) {
  let n = nums.length;
  nums.sort((a, b) => a - b);

  for (let i = n - 3; i >= 0; i--) {
    let max = nums[i + 2];
    let other = nums[i] + nums[i + 1];
    if (other > max) {
      return other + max;
    }
  }
  return 0;
};
