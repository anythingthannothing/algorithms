class Solution {
  List<List<int>> construct2DArray(List<int> original, int m, int n) {
    if (original.length != m * n) {
      return [];
    }

    List<List<int>> result =
        List.generate(m, (i) => List.generate(n, (i) => 0));

    for (int i = 0; i < original.length; i++) {
      result[(i ~/ n)][i % n] = original[i];
    }

    return result;
  }
}
