var findBall = function (grid) {
  let arr = [];
  let colLength = grid.length;
  let rowLength = grid[0].length;
  let tmpRow = 0;
  while (tmpRow < rowLength) {
    let pos = tmpRow;
    let tmpCol = 0;
    while (tmpCol < colLength) {
      let check = checkCell(grid[tmpCol], pos);
      if (check === 0) {
        pos = -1;
        break;
      }
      pos += check;
      tmpCol++;
    }
    arr.push(pos);
    tmpRow++;
  }
  return arr;
};

var checkCell = function (row, index) {
  if (row[index] === 1 && index + 1 < row.length && row[index + 1] === 1) {
    return 1;
  }
  if (row[index] === -1 && index - 1 >= 0 && row[index - 1] === -1) {
    return -1;
  }
  return 0;
};
