const isStrictlyPalindromic = function (n) {
  function isPalindrome(str) {
    let start = 0,
      end = str.length - 1;

    while (start < end) {
      if (str[start] !== str[end]) return false;
      else {
        start++;
        end--;
      }
    }
    return true;
  }

  for (let i = 2; i <= n - 2; i++) {
    if (!isPalindrome(n.toString(i))) return false;
  }
  return true;
};
