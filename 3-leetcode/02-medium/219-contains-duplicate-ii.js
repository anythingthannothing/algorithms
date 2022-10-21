// Solution with Map -> T.C: O(n) | S.C(O(n))
const containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  const n = nums.length;

  for (let i = n - 1; i >= 0; i--) {
    if (map.has(nums[i]) && map.get(nums[i]) - i <= k) return true;
    map.set(nums[i], i);
  }

  return false;
};
