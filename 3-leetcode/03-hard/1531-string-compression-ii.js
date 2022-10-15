const getLengthOfOptimalCompression = function (s, k) {
  const n = s.length;
  const dp = new Array(n + 1).fill(n).map((row) => new Array(k + 1).fill(n));
  dp[0][0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= k; j++) {
      let letterCount = 0;
      let deletion = 0;
      for (let l = i; l >= 1; l--) {
        if (s.charAt(l - 1) === s.charAt(i - 1)) letterCount++;
        else deletion++;
        let places = 0;
        if (letterCount >= 100) places = 3;
        else if (letterCount >= 10) places = 2;
        else if (letterCount >= 2) places = 1;
        if (j - deletion >= 0) {
          dp[i][j] = Math.min(dp[i][j], dp[l - 1][j - deletion] + 1 + places);
        }
      }
      if (j > 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[n][k];
};
