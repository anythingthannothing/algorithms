// Loop Once
const matrixReshape = (mat, r, c) => {
  let m = mat.length,
    n = mat[0].length;
  if (r * c !== n * m) return mat;
  let answer = Array.from({ length: r }, (v) =>
    Array.from({ length: c }, (v) => 0)
  );
  for (let i = 0; i < r * c; i++) {
    answer[Math.floor(i / c)][i % c] = mat[Math.floor(i / n)][i % n];
  }
  return answer;
};

// Loop Twice
// const matrixReshape = (mat, r, c) => {
//   let m = mat.length,
//       n = mat[0].length;
//   if (m * n !== r * c) return mat;
//   let answer = [];
//   for (let i = 0; i < r; i++) {
//     for (let j = 0; j < c; j++) {
//       answer[i][j] = mat[i * c + j];
//     }
//   }
//   return answer;
// };
