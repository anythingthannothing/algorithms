const stoneGameII = (piles: number[]) => {
  const memo = new Map<string, number>();
  let n = piles.length;
  const suffixSum = Array.from({ length: n }, () => 0);
  suffixSum[n - 1] = piles[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffixSum[i] = piles[i] + suffixSum[i + 1];
  }
  const dp = (i: number, m: number) => {
    if (i >= n) {
      return 0;
    }

    if (memo.has(`${i}-${m}`)) {
      return memo.get(`${i}-${m}`);
    }

    let maxStones = 0;

    for (let x = 1; x <= 2 * m && i + x <= n; x++) {
      maxStones = Math.max(maxStones, suffixSum[i] - dp(i + x, Math.max(m, x)));
    }

    memo.set(`${i}-${m}`, maxStones);

    return maxStones;
  };

  return dp(0, 1);
};
