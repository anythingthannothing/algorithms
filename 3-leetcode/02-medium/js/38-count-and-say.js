const countAndSay = function (n) {
  let result = "1";
  while (--n) {
    let curr = "";
    for (let i = 0; i < result.length; i++) {
      let count = 1;
      while (i + 1 < result.length && result[i] === result[i + 1]) {
        count++;
        i++;
      }
      curr += count.toString() + result[i];
    }
    result = curr;
  }
  return result;
};
