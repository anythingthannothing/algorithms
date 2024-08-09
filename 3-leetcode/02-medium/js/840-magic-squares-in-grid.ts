const isMagicSquare = (grid: number[][], row: number, col: number) => {
  const seen = Array.from({ length: 10 }, () => false);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const num = grid[row + i][col + j];
      if (num < 1 || num > 9) {
        return false;
      }
      if (seen[num]) {
        return false;
      }

      seen[num] = true;
    }
  }

  const diagonal1 =
    grid[row][col] + grid[row + 1][col + 1] + grid[row + 2][col + 2];
  const diagonal2 =
    grid[row + 2][col] + grid[row + 1][col + 1] + grid[row][col + 2];

  if (diagonal1 != diagonal2) {
    return false;
  }

  const row1 = grid[row][col] + grid[row][col + 1] + grid[row][col + 2];
  const row2 =
    grid[row + 1][col] + grid[row + 1][col + 1] + grid[row + 1][col + 2];
  const row3 =
    grid[row + 2][col] + grid[row + 2][col + 1] + grid[row + 2][col + 2];

  if (!(row1 == diagonal1 && row2 == diagonal1 && row3 == diagonal1)) {
    return false;
  }

  const col1 = grid[row][col] + grid[row + 1][col] + grid[row + 2][col];
  const col2 =
    grid[row][col + 1] + grid[row + 1][col + 1] + grid[row + 2][col + 1];
  const col3 =
    grid[row][col + 2] + grid[row + 1][col + 2] + grid[row + 2][col + 2];

  if (!(col1 == diagonal1 && col2 == diagonal1 && col3 == diagonal1)) {
    return false;
  }

  return true;
};

const numMagicSquaresInside = (grid: number[][]) => {
  let result = 0;
  const m = grid.length;
  const n = grid[0].length;
  for (let row = 0; row + 2 < m; row++) {
    for (let col = 0; col + 2 < n; col++) {
      if (isMagicSquare(grid, row, col)) {
        result++;
      }
    }
  }
  return result;
};
