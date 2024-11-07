const largestCombination = (candidates: number[]): number => {
  let maxCount = 0;

  for (let i = 0; i < 24; i++) {
    let count = 0;

    for (let candidate of candidates) {
      if ((candidate & (1 << i)) !== 0) {
        count++;
      }
    }

    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
};
