const countSmaller = (nums) => {
  let len = nums.length;
  let sortedNums = nums.slice().sort((a, b) => a - b);

  const binarySearch = (arr, target) => {
    let start = 0,
      end = arr.length - 1,
      mid;
    while (true) {
      mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) break;
      if (arr[mid] > target) end = mid - 1;
      else if (arr[mid] < target) start = mid + 1;
    }
    while (arr[mid] === arr[mid - 1]) mid--;
    return mid;
  };

  let counts = Array.from({ length: len }, (v) => 0);
  for (let i = 0; i < len - 1; i++) {
    let index = binarySearch(sortedNums, nums[i]);
    sortedNums.splice(index, 1);
    counts[i] = index;
  }

  return counts;
};
