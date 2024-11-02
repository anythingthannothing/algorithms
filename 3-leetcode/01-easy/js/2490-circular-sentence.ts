const isCircularSentence = (sentence: string): boolean => {
  const len = sentence.length;

  if (sentence[0] != sentence[len - 1]) {
    return false;
  }

  for (let i = 1; i < len; i++) {
    if (sentence[i] == ' ' && sentence[i - 1] != sentence[i + 1]) {
      return false;
    }
  }

  return true;
};
