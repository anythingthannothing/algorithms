const chalkReplacer = (chalk: number[], k: number): number => {
  const length = chalk.length;

  let sum = 0;

  for (let i = 0; i < length; i++) {
    sum += chalk[i];

    if (sum > k) {
      break;
    }
  }

  k = k % sum;

  for (let i = 0; i < length; i++) {
    if (k < chalk[i]) {
      return i;
    }
    k = k - chalk[i];
  }

  return 0;
};
