const maximumScore = function (nums, multipliers) {
  let n = nums.length,
    m = multipliers.length;
  let memo = Array.from({ length: m }, (v) => Array.from({ length: m }));

  function DP(start, times) {
    if (times === m) return 0;
    if (memo[start][times]) return memo[start][times];
    let pickStart = DP(start + 1, times + 1) + nums[start] * multipliers[times];
    let pickEnd =
      DP(start, times + 1) + nums[n - (times - start) - 1] * multipliers[times];
    return (memo[start][times] = Math.max(pickStart, pickEnd));
  }

  return DP(0, 0);
};
