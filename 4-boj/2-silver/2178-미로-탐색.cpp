#include <bits/stdc++.h>

using namespace std;

int n, m, a[100][100], visited[100][100], r, c;
const pair<int, int> dirs[4] = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

int main()
{
  scanf("%d %d", &n, &m);

  for (int i = 0; i < n; i++)
    for (int j = 0; j < m; j++)
    {
      scanf("%1d", &a[i][j]);
    }

  queue<pair<int, int>> q;

  visited[0][0] = 1;

  q.push({0, 0});

  while (q.size())
  {
    tie(r, c) = q.front();
    q.pop();
    for (pair<int, int> dir : dirs)
    {
      int nr = r + dir.first;
      int nc = c + dir.second;
      if (nr < 0 || nr >= n || nc < 0 || nc >= m || a[nr][nc] == 0 || visited[nr][nc])
      {
        continue;
      }
      visited[nr][nc] = visited[r][c] + 1;
      q.push({nr, nc});
    }
  }
  printf("%d", visited[n - 1][m - 1]);

  return 0;
}