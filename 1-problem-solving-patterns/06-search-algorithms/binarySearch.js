function binarySearch(n, arr) {
  for (let start = 0, end = arr.length - 1; start <= end; ) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === n) return mid;
    else if (arr[mid] > n) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}
