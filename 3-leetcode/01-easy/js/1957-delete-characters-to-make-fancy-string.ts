const makeFancyString = (s: string): string => {
  if (s.length < 3) {
    return s;
  }

  let res: string = s.substring(0, 2);

  for (let i = 2; i < s.length; i++) {
    if (s[i] !== s[i - 1] || s[i] !== s[i - 2]) {
      res += s[i];
    }
  }

  return res;
};
