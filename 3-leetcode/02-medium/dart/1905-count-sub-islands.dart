class Solution {
  int countSubIslands(List<List<int>> grid1, List<List<int>> grid2) {
    final rows = grid1.length;
    final cols = grid1.first.length;

    List<List<int>> dirs = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1]
    ];

    bool isSubIsland = false;

    void dfs(int i, int j) {
      final List<(int, int)> stack = [];
      stack.add((i, j));

      while (stack.isNotEmpty) {
        final (r, c) = stack.removeLast();

        if (r < 0 || r >= rows || c < 0 || c >= cols || grid2[r][c] == 0) {
          continue;
        }

        if (grid1[r][c] == 0) {
          isSubIsland = false;
        }
        grid2[r][c] = 0;

        for (final dir in dirs) {
          stack.add((r + dir[0], c + dir[1]));
        }
      }
    }

    int count = 0;

    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
        if (grid2[i][j] == 1) {
          isSubIsland = true;
          dfs(i, j);
          if (isSubIsland) {
            count++;
          }
        }
      }
    }

    return count;
  }
}
