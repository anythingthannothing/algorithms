const nthUglyNumber = (n: number) => {
  const uglyNumbers = Array.from({ length: n }, () => 0);
  uglyNumbers[0] = 1;

  let index2 = 0,
    index3 = 0,
    index5 = 0;
  let next2 = 2,
    next3 = 3,
    next5 = 5;

  for (let i = 1; i < n; i++) {
    let nextUglyNumber = Math.min(next2, next3, next5);
    uglyNumbers[i] = nextUglyNumber;

    if (nextUglyNumber == next2) {
      index2++;
      next2 = uglyNumbers[index2] * 2;
    }
    if (nextUglyNumber == next3) {
      index3++;
      next3 = uglyNumbers[index3] * 3;
    }
    if (nextUglyNumber == next5) {
      index5++;
      next5 = uglyNumbers[index5] * 5;
    }
  }

  return uglyNumbers[n - 1];
};
