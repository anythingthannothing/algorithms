var longestContinuousSubstring = function (s) {
  let max = 1;
  let len = s.length;
  let start = 0,
    end = 1;

  while (end < len) {
    if (s[end].charCodeAt(0) - s[end - 1].charCodeAt(0) == 1) {
      max = Math.max(max, end - start + 1);
      end++;
    } else {
      start = end;
      end++;
    }
  }
  return max;
};
