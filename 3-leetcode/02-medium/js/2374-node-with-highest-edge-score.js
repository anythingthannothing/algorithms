var edgeScore = function (edges) {
  let answer;
  let len = edges.length;
  let arr = Array.from({ length: len }, (v, i) => [i, 0]);

  for (let i = 0; i < len; i++) {
    arr[edges[i]][1] += i;
  }

  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return b[1] - a[1];
  });

  return arr[0][0];
};
