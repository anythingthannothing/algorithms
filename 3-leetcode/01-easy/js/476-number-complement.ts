const findComplement = (num: number): number => {
  const mask = (1 << num.toString(2).length) - 1;
  return num ^ mask;
};
