const guessNumber = function (n) {
  let min = 1,
    max = n;
  while (true) {
    let mid = (max - min) / 2 + min;
    let res = guess(mid);
    if (res === 0) {
      return mid;
    } else if (res === 1) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
};
