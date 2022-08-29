const numIslands = function (grid) {
  let answer = 0;
  let dx = [0, 1, 0, -1];
  let dy = [-1, 0, 1, 0];
  let m = grid.length;
  let n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        answer++;
        DFS(i, j);
      }
    }
  }

  function DFS(row, col) {
    if (row < 0 || row >= m || col < 0 || col >= n || grid[row][col] === "0")
      return;
    grid[row][col] = "0";
    for (let i = 0; i < 4; i++) {
      DFS(row + dy[i], col + dx[i]);
    }
  }

  return answer;
};
