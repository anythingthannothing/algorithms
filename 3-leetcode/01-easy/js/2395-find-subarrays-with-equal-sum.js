const findSubarrays = function (nums) {
  let map = new Map();

  for (let i = 0; i < nums.length - 1; i++) {
    let sum = nums[i] + nums[i + 1];
    if (map.has(sum)) return true;
    map.set(sum, true);
  }
  return false;
};
