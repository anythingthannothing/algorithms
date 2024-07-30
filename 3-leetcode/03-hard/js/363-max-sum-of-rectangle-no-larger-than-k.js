const maxSumSubmatrix = function (matrix, k) {
  let row = matrix.length,
    col = matrix[0].length;
  let maxSum = -Infinity;

  for (let i = 0; i < row; i++) {
    let dp = Array.from({ length: col }, (v) => 0);

    for (let j = i; j < row; j++) {
      let sum = 0,
        max = -Infinity;

      for (let c = 0; c < col; c++) {
        dp[c] += matrix[j][c];

        if (sum < 0) sum = 0;
        sum += dp[c];
        max = Math.max(max, sum);
      }

      if (max <= k) maxSum = Math.max(max, maxSum);
      else {
        max = -Infinity;

        for (let c = 0; c < col; c++) {
          sum = 0;

          for (let d = c; d < col; d++) {
            sum += dp[d];
            if (sum <= k) max = Math.max(sum, max);
          }
        }
        maxSum = Math.max(max, maxSum);
      }
      if (maxSum === k) return k;
    }
  }
  return maxSum;
};
