const findLength = function (nums1, nums2) {
  let answer = 0;
  let n = nums1.length,
    m = nums2.length;
  let dp = Array.from({ length: n }, (v) =>
    Array.from({ length: m }, (v) => 0)
  );

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (nums1[i] === nums2[j]) {
        if (i === 0 || j === 0) dp[i][j] = 1;
        else dp[i][j] = dp[i - 1][j - 1] + 1;
      }
      answer = Math.max(dp[i][j], answer);
    }
  }
  return answer;
};
