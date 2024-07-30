const summaryRanges = (nums: number[]): string[] => {
  let length = nums.length;
  let left = 0;
  let right = 0;
  const result = [];

  if (nums.length === 1) {
    return [nums[0].toString()];
  }

  for (let i = 0; i < length; i++) {
    const cur = nums[i];
    const next = nums[i + 1];

    if (next - cur === 1) {
      right++;
      continue;
    }

    if (right === left) {
      result.push(nums[left].toString());
    } else {
      result.push(`${nums[left]}->${nums[right]}`);
    }

    left = i + 1;
    right++;
  }

  return result;
};
