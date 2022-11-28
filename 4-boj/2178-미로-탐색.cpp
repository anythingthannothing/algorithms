#include <bits/stdc++.h>

using namespace std;

int n, m, a[100][100], visited[100][100], r, c;
string s;
vector<vector<int>> arr;
const vector<vector<int>> dirs = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

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
    for (int i = 0; i < 4; i++)
    {
      int nr = r + dirs[i][0];
      int nc = c + dirs[i][1];
      if (nr < 0 || nr >= n || nc < 0 || nc >= m || a[nr][nc] == 0)
        continue;
      if (visited[nr][nc])
        continue;
      visited[nr][nc] = visited[r][c] + 1;
      q.push({nr, nc});
    }
  }
  printf("%d", visited[n - 1][m - 1]);

  return 0;
}