var largestLocal = function (grid) {
  let len = grid.length;
  let answer = Array.from({ length: len - 2 }, (v) =>
    Array.from({ length: len - 2 }, (v) => 0)
  );
  let xy = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];

  for (let i = 1; i <= len - 2; i++) {
    for (let j = 1; j <= len - 2; j++) {
      let max = grid[i][j];
      for (let k = 0; k < 8; k++) {
        max = Math.max(max, grid[i + xy[k][0]][j + xy[k][1]]);
      }
      answer[i - 1][j - 1] = max;
    }
  }
  return answer;
};
