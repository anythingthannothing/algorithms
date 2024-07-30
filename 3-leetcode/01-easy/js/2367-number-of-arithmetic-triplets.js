var arithmeticTriplets = function (nums, diff) {
  let answer = 0;
  let len = nums.length;

  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        if (nums[k] - nums[j] === diff && nums[j] - nums[i] === diff) answer++;
      }
    }
  }
  return answer;
};
