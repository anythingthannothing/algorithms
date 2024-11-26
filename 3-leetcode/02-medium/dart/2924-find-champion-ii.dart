class Solution {
  int findChampion(int n, List<List<int>> edges) {
    List<int> inDegrees = List.generate(n, (i) => 0);

    for (final edge in edges) {
      inDegrees[edge[1]]++;
    }

    int champ = -1;
    bool isChampExists = false;

    for (int i = 0; i < n; i++) {
      if (inDegrees[i] == 0) {
        if (isChampExists) {
          return -1;
        }

        champ = i;
        isChampExists = true;
      }
    }

    return champ;
  }
}
