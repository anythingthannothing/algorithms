class Solution {
  int largestCombination(List<int> candidates) {
    int maxCount = 0;

    for (int i = 0; i < 24; i++) {
      int count = 0;

      for (int candidate in candidates) {
        if (candidate & (1 << i) != 0) {
          count++;
        }
      }

      maxCount = max(maxCount, count);
    }

    return maxCount;
  }
}
