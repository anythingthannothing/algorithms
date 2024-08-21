class Solution {
  int strangePrinter(String s) {
    s = removeDuplicates(s);
    int n = s.length;

    List<List<int>> minTurns = List.generate(
      n,
      (i) => List.generate(n, (j) => 0),
    );

    for (int i = 0; i < n; i++) {
      minTurns[i][i] = 1;
    }

    for (int length = 2; length <= n; length++) {
      for (int start = 0; start + length - 1 < n; start++) {
        int end = start + length - 1;

        minTurns[start][end] = length;

        for (int split = 0; split < length - 1; split++) {
          int totalTurns =
              minTurns[start][start + split] + minTurns[start + split + 1][end];

          if (s[start + split] == s[end]) {
            totalTurns--;
          }

          minTurns[start][end] = min(minTurns[start][end], totalTurns);
        }
      }
    }

    return minTurns[0][n - 1];
  }

  String removeDuplicates(String s) {
    String uniqueChars = '';
    int i = 0;
    while (i < s.length) {
      String currentChar = s[i];
      uniqueChars += currentChar;
      while (i < s.length && s[i] == currentChar) {
        i++;
      }
    }
    return uniqueChars;
  }
}
