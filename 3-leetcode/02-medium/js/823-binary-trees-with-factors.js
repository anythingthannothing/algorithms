const MOD = 1e9 + 7;
const numFactoredBinaryTrees = (a) => {
  let n = a.length;
  let dp = new Map();
  a.sort((x, y) => x - y);
  for (let i = 0; i < n; i++) {
    dp.set(a[i], 1);
    for (let j = 0; j < i; j++) {
      let divide = (a[i] / a[j]) >> 0;
      let dd = dp.get(divide);
      let ii = dp.get(a[i]);
      let jj = dp.get(a[j]);
      if (a[i] % a[j] == 0 && dp.has(divide)) {
        dp.set(a[i], ii + jj * dd);
      }
    }
  }
  let res = 0;
  for (const [, v] of dp) res += v;
  return res % MOD;
};
