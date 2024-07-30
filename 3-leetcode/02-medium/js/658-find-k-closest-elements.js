// Solution with Two-pointers
const findClosestElements = function (arr, k, x) {
  let start = 0;
  let end = arr.length - 1;
  let result = [];

  while (end - start >= k) {
    if (Math.abs(arr[start] - x) > Math.abs(arr[end] - x)) {
      start++;
    } else {
      end--;
    }
  }

  for (let i = start; i <= end; i++) {
    result.push(arr[i]);
  }

  return result;
};

// Solution with Sorting
// const findClosestElements = function (arr, k, x) {
//   let result = [];
//   let newArr = [];

//   for (let num of arr) {
//     newArr.push([num, Math.abs(num - x)]);
//   }

//   newArr.sort((a, b) => {
//     if (a[1] === b[1]) return a[0] - b[0];
//     else return a[1] - b[1];
//   });

//   for (let i = 0; i < k; i++) {
//     result.push(newArr[i][0]);
//   }

//   return result.sort((a, b) => a - b);
// };
