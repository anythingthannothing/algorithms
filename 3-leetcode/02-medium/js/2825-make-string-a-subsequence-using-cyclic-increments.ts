const canMakeSubsequence = (str1: string, str2: string): boolean => {
  let i = 0;
  let j = 0;
  let n = str1.length;
  let m = str2.length;

  while (i < n && j < m) {
    if ((str2.charCodeAt(j) - str1.charCodeAt(i) + 26) % 26 <= 1) {
      j++;
    }
    i++;
  }

  return j === m;
};
