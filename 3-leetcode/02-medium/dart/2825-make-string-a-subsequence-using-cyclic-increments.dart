class Solution {
  bool canMakeSubsequence(String str1, String str2) {
    int i = 0;
    int j = 0;
    int n = str1.length;
    int m = str2.length;

    while (i < n && j < m) {
      if ((str2.codeUnitAt(j) - str1.codeUnitAt(i) + 26) % 26 <= 1) {
        j++;
      }

      i++;
    }

    return j == m;
  }
}
