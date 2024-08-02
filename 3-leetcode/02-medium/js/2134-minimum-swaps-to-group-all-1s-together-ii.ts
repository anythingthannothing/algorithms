const minSwapsHelper = (data: number[], val: number) => {
  let length = data.length;
  let totalValCount = 0;

  for (let i = 0; i < length; i++) {
    if (data[i] == val) {
      totalValCount++;
    }
  }

  if (totalValCount == 0 || totalValCount == length) {
    return 0;
  }

  let start = 0;
  let end = 0;
  
  let maxValInWindow = 0;
  let currentValInWindow = 0;

  while (end < totalValCount)
  {
      if (data[end++] == val)
      {
          currentValInWindow++;
      }
  }
  maxValInWindow = Math.max(maxValInWindow, currentValInWindow);

  while (end < length)
  {
    if (data[start++] == val) {
      currentValInWindow--;
    }
      
    if (data[end++] == val) {
      currentValInWindow++;
    }
      
    maxValInWindow = Math.max(maxValInWindow, currentValInWindow);
  }

  return totalValCount - maxValInWindow;
}

const minSwaps = (nums: number[]): number => {
  return Math.min(minSwapsHelper(nums, 0), minSwapsHelper(nums, 1));
};
