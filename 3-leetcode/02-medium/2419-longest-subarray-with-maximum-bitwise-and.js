const longestSubarray = function (nums) {
  let max = Math.max(...nums);
  let len = nums.length;
  let dp = Array.from({ length: len }, (v) => 0);

  let result = [];

  for (let i = 0; i < len; i++) {
    if (nums[i] === max) result.push(i);
  }

  let answer = 1;
  max = 1;
  for (let i = 1; i < len; i++) {
    if (result[i] - result[i - 1] === 1) {
      answer++;
      max = Math.max(max, answer);
    } else {
      max = Math.max(max, answer);
      answer = 1;
    }
  }
  return max;
};
