// Solution of O(n + m)
const searchMatrix = (matrix, target) => {
    let m = matrix.length,
        n = matrix[0].length;
    let row = 0,
        col = n - 1;
    while (row < m && col >= 0) {
        let current = matrix[row][col];
        if (current === target) return true;
        else if (current > target) col--;
        else row++;
    }
    return false;
}


// Solution of O(nlogn)
const searchMatrix2 = (matrix, target) => {
    const binarySearch = (arr, num) => {
        let start = 0,
            end = arr.length - 1,
            mid
        while (start <= end) {
            mid = Math.floor((start + end) / 2);
            if (arr[mid] === num) return true;
            if (arr[mid] > num) end = mid - 1;
            else start = mid + 1;
        }
    }
    let col = matrix[0].length - 1;
    for (let i = 0, len = matrix.length; i < len; i++) {
        if (matrix[i][0] > target) break;
        if (matrix[i][col] < target) continue;
        if (binarySearch(matrix[i], target) === true) return true;
    }
    return false;
}

// Solution of O(n^2)
const searchMatrix3 = (matrix, target) => {
    let m = matrix.length,
        n = matrix[0].length;
    for (let row = 0; row < m; row++) {
        if (matrix[row][n - 1] < target) continue;
        if (matrix[row][0] > target) break;
        for (let col = 0; col < n; col++) {
            if (matrix[row][col] > target) break;
            if (matrix[row][col] === target) return true;
        }
    }
    return false;
};