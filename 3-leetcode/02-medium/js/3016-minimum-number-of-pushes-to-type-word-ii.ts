function minimumPushes(word: string): number {
  let result = 0;
  const arr = Array.from({ length: 26 }, (v) => 0);

  for (let char of word) {
    arr[char.charCodeAt(0) - 97]++;
  }

  arr.sort((a, b) => {
    if (a === b) {
      return 0;
    }
    return a > b ? -1 : 1;
  });

  for (let i = 0; i < 26; i++) {
    if (arr[i] === 0) break;

    const num = Math.floor(i / 8);

    if (num === 0) {
      result += arr[i];
    } else if (num === 1) {
      result += 2 * arr[i];
    } else if (num === 2) {
      result += 3 * arr[i];
    } else {
      result += 4 * arr[i];
    }
  }

  return result;
}
