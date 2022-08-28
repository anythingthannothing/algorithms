const diagonalSort = function (mat) {
  let map = new Map();
  let n = mat.length,
    m = mat[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map.has(i - j)) {
        map.get(i - j).push(mat[i][j]);
      } else {
        map.set(i - j, []);
        map.get(i - j).push(mat[i][j]);
      }
    }
  }
  map.forEach((v) => (v = v.sort((a, b) => b - a)));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      mat[i][j] = map.get(i - j).pop();
    }
  }

  return mat;
};
