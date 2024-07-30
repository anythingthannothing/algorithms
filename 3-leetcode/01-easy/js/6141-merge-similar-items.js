// Solution Using Hash Map => T.C: O(m + n) | S.C: O(m + n)
const mergeSimilarItems = function (items1, items2) {
  let answer = [];
  let map = new Map();

  for (let i = 0; i < items1.length; i++) {
    map.set(items1[i][0], items1[i][1]);
  }

  for (let i = 0; i < items2.length; i++) {
    map.set(items2[i][0], map.get(items2[i][0]) + items2[i][1] || items2[i][1]);
  }

  for (let [key, value] of map) {
    answer.push([key, value]);
  }

  answer.sort((a, b) => a[0] - b[0]);
  return answer;
};
