const minSetSize = function (arr) {
  let answer = 0;
  let frequencies = [];
  let removed = 0;
  let target = arr.length / 2;
  let map = new Map();

  for (let num of arr) {
    map.set(num, map.get(num) + 1 || 1);
  }

  for (let [key, value] of map) {
    frequencies.push(value);
  }

  frequencies.sort((a, b) => a - b);

  while (removed < target) {
    answer++;
    removed += frequencies.pop();
  }

  return answer;
};
