const reverseWords = function (s) {
  return s
    .split(' ')
    .reverse()
    .filter((str) => str.length)
    .join(' ');
};
