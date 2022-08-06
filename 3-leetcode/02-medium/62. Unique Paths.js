// Solution Using Dynamic Programming
const uniquePaths = (m, n) => {
  if (m === 1 || n === 1) return 1;
  let dp = Array.from({ length: m }, (v) =>
    Array.from({ length: n }, (v) => 0)
  );
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0) dp[i][j] = 1;
      else if (j === 0) dp[i][j] = 1;
      else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};

// Solution Using Combination
const uniquePaths2 = (m, n) => {
  let answer = 1;
  if (m === 1 || n === 1) return answer;
  m--;
  n--;
  let sum = m + n;
  while (sum > 1) {
    answer *= sum--;
    if (m > 1) answer /= m--;
    if (n > 1) answer /= n--;
  }
  return answer;
};
