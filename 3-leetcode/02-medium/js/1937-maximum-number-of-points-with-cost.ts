const maxPoints = (points: number[][]) => {
  const rows = points.length;
  const cols = points[0].length;
  let previousRow: number[] = [];

  for (let col = 0; col < cols; col++) {
    previousRow[col] = points[0][col];
  }

  for (let row = 0; row < rows - 1; row++) {
    const leftMax: number[] = [];
    const rightMax: number[] = [];
    const currentRow: number[] = [];

    leftMax[0] = previousRow[0];
    for (let col = 1; col < cols; col++) {
      leftMax[col] = Math.max(leftMax[col - 1] - 1, previousRow[col]);
    }

    rightMax[cols - 1] = previousRow[cols - 1];
    for (let col = cols - 2; col >= 0; col--) {
      rightMax[col] = Math.max(rightMax[col + 1] - 1, previousRow[col]);
    }

    for (let col = 0; col < cols; col++) {
      currentRow[col] =
        points[row + 1][col] + Math.max(leftMax[col], rightMax[col]);
    }

    previousRow = currentRow;
  }

  let maxPoints = 0;
  for (let col = 0; col < cols; ++col) {
    maxPoints = Math.max(maxPoints, previousRow[col]);
  }

  return maxPoints;
};
