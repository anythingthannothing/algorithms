class Solution {
  Map<String, int> memo = {};
  int stoneGameII(List<int> piles) {
    int n = piles.length;
    List<int> suffixSum = List.filled(n, 0);
    suffixSum[n - 1] = piles[n - 1];
    for (int i = n - 2; i >= 0; i--) {
      suffixSum[i] = piles[i] + suffixSum[i + 1];
    }
    int dp(int i, int m) {
      if (i >= n) {
        return 0;
      }
      if (memo.containsKey('$i-$m')) {
        return memo['$i-$m']!;
      }
      int maxStones = 0;
      for (int x = 1; x <= 2 * m && i + x <= n; x++) {
        maxStones = max(maxStones, suffixSum[i] - dp(i + x, max(m, x)));
      }
      memo['$i-$m'] = maxStones;
      return maxStones;
    }

    return dp(0, 1);
  }
}
