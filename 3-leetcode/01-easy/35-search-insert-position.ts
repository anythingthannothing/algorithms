const searchInsert = (nums: number[], target: number): number => {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (rightIndex > leftIndex) {
    const middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    const value = nums[middleIndex];

    if (value === target) {
      return middleIndex;
    } else if (value > target) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return nums[leftIndex] < target ? leftIndex + 1 : leftIndex;
};
