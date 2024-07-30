const maxSum = function (grid) {
  let max = -Infinity;
  let n = grid.length;
  let m = grid[0].length;

  for (let i = 0; i < n - 2; i++) {
    let sum =
      grid[i][0] +
      grid[i][1] +
      grid[i][2] +
      grid[i + 1][1] +
      grid[i + 2][0] +
      grid[i + 2][1] +
      grid[i + 2][2];
    max = Math.max(max, sum);
    for (let j = 0; j < m - 3; j++) {
      sum =
        sum -
        grid[i][j] +
        grid[i][j + 3] -
        grid[i + 1][j + 1] +
        grid[i + 1][j + 2] -
        grid[i + 2][j] +
        grid[i + 2][j + 3];
      max = Math.max(max, sum);
    }
  }
  return max;
};
