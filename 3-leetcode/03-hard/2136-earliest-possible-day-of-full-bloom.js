const earliestFullBloom = function (plantTime, growTime) {
  let answer = 0;
  let n = plantTime.length;
  let arr = [];
  for (let i = 0; i < n; i++) arr.push([plantTime[i], growTime[i]]);
  arr.sort((a, b) => a[1] - b[1]);
  for (let [plant, grow] of arr) answer = Math.max(answer, grow) + plant;
  return answer;
};
