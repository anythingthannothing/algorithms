const minSteps = (n: number) => {
  const dp = Array.from({ length: n + 1 }, () => 1000);

  dp[1] = 0;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) {
        dp[i] = Math.min(dp[i], dp[j] + Math.floor(i / j));
      }
    }
  }

  return dp[n];
};
