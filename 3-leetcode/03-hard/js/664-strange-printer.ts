const strangePrinter = (s: string): number => {
  s = removeDuplicates(s);
  const n = s.length;

  const minTurns = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0),
  );

  for (let i = 0; i < n; i++) {
    minTurns[i][i] = 1;
  }

  for (let length = 2; length <= n; length++) {
    for (let start = 0; start + length - 1 < n; start++) {
      let end = start + length - 1;

      minTurns[start][end] = length;

      for (let split = 0; split < length - 1; split++) {
        let totalTurns =
          minTurns[start][start + split] + minTurns[start + split + 1][end];

        if (s[start + split] == s[end]) {
          totalTurns--;
        }

        minTurns[start][end] = Math.min(minTurns[start][end], totalTurns);
      }
    }
  }

  return minTurns[0][n - 1];
};

function removeDuplicates(s: string): string {
  let uniqueChars: string = '';
  let i = 0;
  while (i < s.length) {
    const currentChar = s[i];
    uniqueChars += currentChar;
    while (i < s.length && s[i] === currentChar) {
      i++;
    }
  }
  return uniqueChars;
}
