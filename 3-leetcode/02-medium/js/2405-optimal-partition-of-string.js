const partitionString = function (s) {
  let result = 1;
  let map = new Map();

  for (let char of s) {
    if (!map.has(char)) map.set(char, 1);
    else {
      result++;
      map = new Map();
      map.set(char, 1);
    }
  }
  return result;
};
