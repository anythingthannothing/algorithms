class Solution {
  int minChanges(String s) {
    int minimumChangesRequired = 0;

    for (int i = 0; i < s.length; i += 2) {
      if (s[i] != s[i + 1]) {
        minimumChangesRequired++;
      }
    }

    return minimumChangesRequired;
  }
}
