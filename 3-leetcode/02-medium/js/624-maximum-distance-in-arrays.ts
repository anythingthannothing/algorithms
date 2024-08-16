const maxDistance = (arrays: number[][]): number => {
  let min = arrays[0][0];
  let max = arrays[0][arrays[0].length - 1];
  let result = 0;

  for (let i = 1; i < arrays.length; i++) {
    const length = arrays[i].length;
    result = Math.max(result, arrays[i][length - 1] - min, max - arrays[i][0]);
    min = Math.min(min, arrays[i][0]);
    max = Math.max(max, arrays[i][length - 1]);
  }

  return result;
};
