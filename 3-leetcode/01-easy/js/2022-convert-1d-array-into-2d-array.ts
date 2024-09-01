const construct2DArray = (
  original: number[],
  m: number,
  n: number,
): number[][] => {
  if (original.length != m * n) {
    return [];
  }

  const result = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => 0),
  );

  for (let i = 0; i < original.length; i++) {
    result[Math.floor(i / n)][i % n] = original[i];
  }

  return result;
};
