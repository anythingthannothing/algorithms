const numberOfWays = function (startPos, endPos, k) {
  if (Math.abs(endPos - startPos) % 2 !== k % 2) return 0;
  if (Math.abs(endPos - startPos) > k) return 0;
  const modulo = 1000000000 + 7;

  let pascal = [1, 1];

  for (let i = 2; i <= k; i++) {
    let temp = [];
    for (let j = 0; j < pascal.length - 1; j++) {
      temp.push((pascal[j] + pascal[j + 1]) % modulo);
    }
    pascal = [1, ...temp, 1];
  }

  let min = startPos - k;
  let index = Math.abs(endPos - min) / 2;

  return pascal[index];
};
