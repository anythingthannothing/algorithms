const lengthOfLastWord = (s: string): number => {
  if (s.length === 1) return 1;

  let endIndex = s.length - 1;

  while (endIndex > 0 && s[endIndex] === ' ') {
    endIndex--;
  }

  let startIndex = endIndex;

  while (startIndex > 0 && s[startIndex - 1] !== ' ') {
    startIndex--;
  }

  return endIndex - startIndex + 1;
};
