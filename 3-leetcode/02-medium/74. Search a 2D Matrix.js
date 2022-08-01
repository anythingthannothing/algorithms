// Using Binary Search => T.C: O(log(n + m)) | S.C: (1)
const searchMatrix = (matrix, target) => {
    let m = matrix.length,
        n = matrix[0].length;
    let start = 0,
        end = m * n - 1,
        mid;
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (matrix[Math.floor(mid / n)][mid % n] === target) return true;
      else if (matrix[Math.floor(mid / n)][mid % n] > target) end = mid - 1;
      else start = mid + 1;
    }
    return false;
  };
  
  
  // T.C: O(n + m) | S.C: O(1)
  const searchMatrix2 = function(matrix, target) {
    let len = matrix.length;
    let m = 0,
        n = matrix[0].length - 1;
    while (m < len && n >= 0) {
      if (matrix[m][n] < target) m++;
      else if (matrix[m][n] > target) n--;
      else return true;
    }
    return false;
  };