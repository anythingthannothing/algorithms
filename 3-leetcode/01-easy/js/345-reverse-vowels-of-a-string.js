var reverseVowels = function (s) {
  s = s.split('');
  let i = 0,
    j = s.length - 1;
  let vowels = { a: 1, e: 1, i: 1, o: 1, u: 1, A: 1, E: 1, I: 1, O: 1, U: 1 };
  while (j > i) {
    if (vowels[s[i]] && vowels[s[j]]) {
      var temp = s[j];
      s[j] = s[i];
      s[i] = temp;

      i++;
      j--;
    } else if (!vowels[s[i]]) {
      i++;
    } else if (!vowels[s[j]]) {
      j--;
    }
  }
  return s.join('');
};
