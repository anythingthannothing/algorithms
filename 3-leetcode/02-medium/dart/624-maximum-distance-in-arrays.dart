class Solution {
  int maxDistance(List<List<int>> arrays) {
    int _min = arrays[0][0];
    int _max = arrays[0].last;
    int result = 0;
    for (int i = 1; i < arrays.length; i++) {
      result = max(result, arrays[i].last - _min);
      result = max(result, _max - arrays[i][0]);
      _min = min(_min, arrays[i][0]);
      _max = max(_max, arrays[i].last);
    }
    return result;
  }
}
