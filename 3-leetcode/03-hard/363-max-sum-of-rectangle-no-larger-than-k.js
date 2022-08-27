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
        // build running dp array
        dp[c] += matrix[j][c];

        // implement kadane's algorithm
        if (sum < 0) sum = 0;
        sum += dp[c];
        max = Math.max(max, sum);
      }

      // if max <= k take kadane's algorithm
      if (max <= k) maxSum = Math.max(max, maxSum);
      else {
        // if max > k find the max subarray sum no larger than k
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
      if (maxSum === k) return k; // short circuit
    }
  }
  return maxSum;
};
