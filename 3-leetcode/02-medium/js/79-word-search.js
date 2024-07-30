const exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;
  const len = word.length - 1;
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let flag = false;
  let visited = Array.from({ length: m }, (v) =>
    Array.from({ length: n }, (v) => false),
  );

  for (let i = 0; i < m && !flag; i++) {
    for (let j = 0; j < n && !flag; j++) {
      DFS(0, '', i, j);
    }
  }

  function DFS(level, str, r, c) {
    if (flag) return;
    if (board[r][c] !== word[level]) return;
    if (level === len) return (flag = true);
    str += board[r][c];
    visited[r][c] = true;
    for (let dir of dirs) {
      const [nr, nc] = [r + dir[0], c + dir[1]];
      if (
        nr >= 0 &&
        nr < m &&
        nc >= 0 &&
        nc < n &&
        board[nr][nc] === word[level + 1] &&
        !visited[nr][nc]
      ) {
        DFS(level + 1, str, nr, nc);
      }
    }
    visited[r][c] = false;
  }

  return flag;
};
