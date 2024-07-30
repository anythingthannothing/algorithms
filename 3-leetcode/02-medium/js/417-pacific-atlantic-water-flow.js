const pacificAtlantic = function (heights) {
  let answer = [];

  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[i].length; j++) {
      const isReached = BFS(i, j, heights);
      if (isReached) {
        answer.push([i, j]);
      }
    }
  }
  return answer;
};

function BFS(row, col, grid) {
  const queue = [[row, col]];
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const beenThere = new Set();
  const isReached = [false, false];

  while (queue.length) {
    const [cRow, cCol] = queue.shift();

    if (hasReachedPacific(cRow, cCol, grid)) isReached[0] = true;
    if (hasReachedAtlantic(cRow, cCol, grid)) isReached[1] = true;
    if (isReached[0] && isReached[1]) return true;

    directions.forEach((direction) => {
      const [rToAdd, cToAdd] = direction;
      const [nextRow, nextCol] = [cRow + rToAdd, cCol + cToAdd];

      if (isValid(nextRow, nextCol, cRow, cCol, grid, beenThere)) {
        beenThere.add(`${nextRow}:${nextCol}`);
        queue.push([nextRow, nextCol]);
      }
    });
  }

  return false;
}

function isValid(row, col, cRow, cCol, grid, beenThere) {
  if (grid[row] === undefined) return false;
  if (grid[row][col] === undefined) return false;
  if (beenThere.has(`${row}:${col}`)) return false;
  if (grid[cRow][cCol] < grid[row][col]) return false;
  return true;
}

function hasReachedPacific(row, col, grid) {
  if (col === 0 || row === 0) return true;
  return false;
}

function hasReachedAtlantic(row, col, grid) {
  if (row === grid.length - 1 || col === grid[0].length - 1) return true;
  return false;
}
