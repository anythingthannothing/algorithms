const decrypt = (code: number[], k: number): number[] => {
  const len = code.length;
  const res = Array.from({ length: len }, (v, i) => 0);

  if (k == 0) {
    return res;
  }

  let sum = 0;
  let start = k > 0 ? 1 : len + k;
  let end = k > 0 ? k : len - 1;

  for (let i = start; i <= end; i++) {
    sum += code[i];
  }

  for (let i = 0; i < len; i++) {
    res[i] = sum;
    sum -= code[start % len];
    sum += code[(end + 1) % len];
    start++;
    end++;
  }

  return res;
};
