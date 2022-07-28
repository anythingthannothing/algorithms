// Using Dynamic Programming => T.C: O(n) | S.C: O(1);
const maxSubArray = (nums) => {
    let answer = -Infinity;
    let curr = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
      curr = Math.max(nums[i], curr + nums[i]);
      answer = Math.max(answer, curr);
    }
    return answer;
  };