const spiralMatrixIII = (
  rows: number,
  cols: number,
  rStart: number,
  cStart: number,
): number[][] => {
  const result = [];
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (let step = 1, direction = 0; result.length < rows * cols; ) {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < step; j++) {
        if (rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols) {
          result.push([rStart, cStart]);
        }

        rStart += dir[direction][0];
        cStart += dir[direction][1];
      }

      direction = (direction + 1) % 4;
    }
    step++;
  }

  return result;
};
