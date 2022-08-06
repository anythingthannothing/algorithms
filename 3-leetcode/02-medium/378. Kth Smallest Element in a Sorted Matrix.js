// Solution Using Sorting => T.C: O(nlogn) | S.C: O(n^2)
let kthSmallest = (matrix, k) => {
  let newMatrix = [];
  let len = matrix.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      newMatrix.push(matrix[i][j]);
    }
  }
  return newMatrix.sort((a, b) => a - b)[k - 1];
};
