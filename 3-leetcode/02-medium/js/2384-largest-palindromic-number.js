const largestPalindromic = function (num) {
  let answer = [];
  let map = new Map();

  for (let n of num) map.set(+n, map.get(+n) + 1 || 1);
  let max = -1;
  for (let [key, value] of map) {
    if (value % 2 === 1) max = Math.max(max, key);
  }
  if (max > -1) {
    answer.push(max);
    map.set(max, map.get(max) - 1);
  }

  while (true) {
    let min = 10;
    for (let [key, value] of map) {
      if (value === 0 || value === 1) {
        map.delete(key);
      } else min = Math.min(min, key);
    }
    if (min === 10) break;
    answer.push(min);
    answer.unshift(min);
    map.set(min, map.get(min) - 2);
  }

  while (answer[0] === 0) {
    answer.shift();
    answer.pop();
  }
  if (answer.length === 0) return "0";
  return answer.join("");
};
