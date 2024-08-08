function merge(arr1, arr2) {
  let result = [];
  let len1 = arr1.length;
  let len2 = arr2.length;
  let i = 0;
  let j = 0;
  while (i < len1 && j < len2) {
    if (arr1[i] >= arr2[j]) result.push(arr2[j++]);
    else result.push(arr1[i++]);
  }
  while (i < len1) result.push(arr1[i++]);
  while (j < len2) result.push(arr2[j++]);
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}