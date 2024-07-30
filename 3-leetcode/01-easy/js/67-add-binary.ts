const addBinary = (a: string, b: string): string => {
  let result: string = '';
  let i: number = a.length - 1;
  let j: number = b.length - 1;
  let carry: number = 0;

  while (i >= 0 || j >= 0) {
    if (i >= 0) {
      carry += +a[i--];
    }

    if (j >= 0) {
      carry += +b[j--];
    }

    result = (carry % 2) + result;
    carry = Math.floor(carry / 2);
  }

  if (carry) {
    result = carry + result;
  }

  return result;
};
