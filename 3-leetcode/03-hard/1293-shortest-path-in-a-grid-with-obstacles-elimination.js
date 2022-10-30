const shortestPath = function (grid, k) {
  const row = grid.length - 1;
  const column = grid[0].length - 1;
  const dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const queue = [[0, [0, 0, k]]];
  const visited = new Map();
  visited.set(`${0},${0},${k}`, true);

  if (k >= row + column) return row + column;

  while (queue.length) {
    const [steps, [x, y, obs_left]] = queue.shift();
    if (x == row && y == column) return steps;

    for (let i = 0; i < dir.length; i++) {
      const xx = x + dir[i][0],
        yy = y + dir[i][1];

      if (xx >= 0 && xx < row + 1 && yy >= 0 && y < column + 1) {
        const new_removal = obs_left - grid[xx][yy],
          new_state = [xx, yy, new_removal],
          new_visited = `${xx},${yy},${new_removal}`;

        if (new_removal >= 0 && !visited.has(new_visited)) {
          visited.set(new_visited, true);
          queue.push([steps + 1, new_state]);
        }
      }
    }
  }
  return -1;
};
