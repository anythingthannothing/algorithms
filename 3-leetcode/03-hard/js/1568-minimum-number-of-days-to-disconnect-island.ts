const DIRECTIONS: number[][] = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const minDays = (grid: number[][]): number => {
  const rows = grid.length;
  const cols = grid[0].length;

  const initialIslandCount = countIslands(grid);

  if (initialIslandCount != 1) {
    return 0;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] == 0) {
        continue;
      }

      grid[row][col] = 0;
      const newIslandCount = countIslands(grid);

      if (newIslandCount != 1) {
        return 1;
      }

      grid[row][col] = 1;
    }
  }

  return 2;
};

function countIslands(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited: boolean[][] = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => false),
  );
  let islandCount = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (!visited[row][col] && grid[row][col] == 1) {
        exploreIsland(grid, row, col, visited);
        islandCount++;
      }
    }
  }
  return islandCount;
}

function exploreIsland(
  grid: number[][],
  row: number,
  col: number,
  visited: boolean[][],
) {
  visited[row][col] = true;

  for (let dir of DIRECTIONS) {
    const newRow = row + dir[0];
    const newCol = col + dir[1];
    if (isValidLandCell(grid, newRow, newCol, visited)) {
      exploreIsland(grid, newRow, newCol, visited);
    }
  }
}

function isValidLandCell(
  grid: number[][],
  row: number,
  col: number,
  visited: boolean[][],
) {
  const rows = grid.length;
  const cols = grid[0].length;
  return (
    row >= 0 &&
    col >= 0 &&
    row < rows &&
    col < cols &&
    grid[row][col] == 1 &&
    !visited[row][col]
  );
}
