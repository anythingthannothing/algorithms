#include <bits/stdc++.h>

using namespace std;

int visited[54][54], a[50][50], n, l, r, sum, cnt;
vector<pair<int, int>> dirs = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};
vector<pair<int, int>> v;

void dfs(int y, int x, vector<pair<int, int>> &v)
{
  for (auto dir : dirs)
  {
    int ny = y + dir.first;
    int nx = x + dir.second;
    if (nx < 0 || nx >= n || ny < 0 || ny >= n || visited[ny][nx])
      continue;
    if (abs(a[ny][nx] - a[y][x]) >= l && abs(a[ny][nx] - a[y][x]) <= r)
    {
      visited[ny][nx] = 1;
      v.push_back({ny, nx});
      sum += a[ny][nx];
      dfs(ny, nx, v);
    }
  }
}

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);
  cin >> n >> l >> r;
  for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
    {
      cin >> a[i][j];
    }

  while (true)
  {
    bool flag = 0;
    memset(visited, 0, sizeof(visited));
    for (int i = 0; i < n; i++)
    {
      for (int j = 0; j < n; j++)
        if (!visited[i][j])
        {
          v.clear();
          visited[i][j] = 1;
          v.push_back({i, j});
          sum = a[i][j];
          dfs(i, j, v);
          if (v.size() == 1)
            continue;
          for (pair<int, int> b : v)
          {
            a[b.first][b.second] = sum / v.size();
            flag = 1;
          }
        }
    }

    if (!flag)
      break;
    cnt++;
  }
  cout << cnt << "\n";
  return 0;
}