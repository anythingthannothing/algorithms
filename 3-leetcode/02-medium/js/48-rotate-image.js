const rotate = (matrix) => {
  let n = matrix.length;
  for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      let temp = matrix[n - 1 - j][i];
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - 1 - j] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
};
