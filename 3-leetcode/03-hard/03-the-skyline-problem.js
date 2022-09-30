var getSkyline = function (buildings) {
  let xSet = new Set();
  for (let [left, right, _] of buildings) {
    xSet.add(left);
    xSet.add(right);
  }
  let xPos = [...xSet];
  xPos.sort((a, b) => a - b);

  let n = buildings.length;
  let result = [[-1, 0]];
  for (let pos of xPos) {
    let i = 0;
    let height = 0;
    while (i < n && buildings[i][0] <= pos) {
      if (buildings[i][1] > pos) {
        height = Math.max(height, buildings[i][2]);
      }
      i++;
    }
    if (result[result.length - 1][1] === height) continue;
    result.push([pos, height]);
  }

  return result.slice(1);
};
