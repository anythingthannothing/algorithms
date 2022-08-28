const garbageCollection = function (garbage, travel) {
  let answer = 0;
  let gMap = new Map();
  let dMap = new Map();

  gMap.set("M", 0);
  gMap.set("P", 0);
  gMap.set("G", 0);
  dMap.set("M", -1);
  dMap.set("P", -1);
  dMap.set("G", -1);

  for (let i = 0, len = garbage.length; i < len; i++) {
    for (let j = 0; j < garbage[i].length; j++) {
      gMap.set(garbage[i][j], gMap.get(garbage[i][j]) + 1);
      dMap.set(garbage[i][j], i);
    }
  }
  for (let [key, value] of gMap) answer += value;
  for (let [key, value] of dMap)
    if (value !== -1 && value !== 0)
      answer += travel.slice(0, value).reduce((acc, v) => acc + v, 0);

  return answer;
};
