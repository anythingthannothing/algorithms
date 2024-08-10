const regionsBySlashes = (grid: string[]): number => {
  let result = 0;
  const n = grid.length;

  const expandedGrid = Array.from({ length: n * 3 }, () =>
    Array.from({ length: n * 3 }, () => 0),
  );

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let exRow = i * 3;
      let exCol = j * 3;

      if (grid[i][j] === '/') {
        expandedGrid[exRow][exCol + 2] = 1;
        expandedGrid[exRow + 1][exCol + 1] = 1;
        expandedGrid[exRow + 2][exCol] = 1;
      } else if (grid[i][j] === '\\') {
        expandedGrid[exRow][exCol] = 1;
        expandedGrid[exRow + 1][exCol + 1] = 1;
        expandedGrid[exRow + 2][exCol + 2] = 1;
      }
    }
  }

  for (let i = 0; i < expandedGrid.length; i++) {
    for (let j = 0; j < expandedGrid.length; j++) {
      if (expandedGrid[i][j] === 0) {
        floodfill(expandedGrid, i, j);
        result++;
      }
    }
  }

  return result;
};

function floodfill(grid, row, col) {
  grid[row][col] = 1;
  const queue = [[row, col]];
  const dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  while (queue.length) {
    const [curRow, curCol] = queue.shift();

    for (let [row, col] of dir) {
      let nextRow = row + curRow;
      let nextCol = col + curCol;
      if (isValidCell(grid, nextRow, nextCol)) {
        grid[nextRow][nextCol] = 1;
        queue.push([nextRow, nextCol]);
      }
    }
  }
}

function isValidCell(grid: number[][], row: number, col: number): boolean {
  const n = grid.length;

  return row >= 0 && col >= 0 && row < n && col < n && grid[row][col] === 0;
}
