const smallestDistancePair = (nums: number[], k: number): number => {
  const max = nums.reduce((acc, val) => max(acc, val), -1);

  const arr = Array.from({ length: max + 1 }, () => 0);

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const cur = Math.abs(nums[i] - nums[j]);

      arr[cur]++;
    }
  }

  for (let i = 0; i <= max; i++) {
    k -= arr[i];

    if (k <= 0) {
      return i;
    }
  }

  return -1;
};
