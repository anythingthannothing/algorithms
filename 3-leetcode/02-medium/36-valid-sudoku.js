const isValidSudoku = function (board) {
  let seen = new Set();
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let curr = board[r][c];
      let block = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      if (board[r][c] !== '.') {
        if (
          seen.has(`${curr}r${r}`) ||
          seen.has(`${curr}c${c}`) ||
          seen.has(`${curr}b${block}`)
        )
          return false;
      }
      seen.add(`${curr}r${r}`);
      seen.add(`${curr}c${c}`);
      seen.add(`${curr}b${block}`);
    }
  }

  return true;
};
