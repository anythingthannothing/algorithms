const removeElement = (nums: number[], val: number): number => {
  const length = nums.length;
  let index: number = 0;

  for (let i = 0; i < length; i++) {
    if (nums[i] != val) {
      nums[index] = nums[i];
      index++;
    }
  }

  return index;
};
