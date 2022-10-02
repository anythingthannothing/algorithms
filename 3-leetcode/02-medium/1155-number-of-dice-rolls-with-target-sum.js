var numRollsToTarget = function (n, k, target) {
  const counts = {};

  const countRec = function (n, k, target) {
    if (target < n || n * k < target) return 0;
    if (n === 1) return k >= target ? 1 : 0;

    const key = `${n}:${target}`;
    if (counts[key]) return counts[key];

    let res = 0;

    for (let i = 1; i <= k; i++) {
      res += countRec(n - 1, k, target - i);
      res %= 10 ** 9 + 7;
    }

    counts[key] = res;

    return res;
  };

  return countRec(n, k, target);
};
