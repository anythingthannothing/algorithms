#include <bits/stdc++.h>

using namespace std;

int n, m, a[10][10];
bool visited[10][10];
vector<pair<int, int>> v;
vector<vector<int>> dirs = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

void dfs(int y, int x)
{
  if (a[y][x] == 1 || visited[y][x])
    return;
  visited[y][x] = 1;
  for (vector dir : dirs)
  {
    int ny = y + dir[0], nx = x + dir[1];
    if (ny < 0 || nx < 0 || ny >= n || nx >= m)
      continue;
    dfs(ny, nx);
  }
}

int solve()
{
  memset(visited, 0, sizeof(visited));
  for (int i = 0; i < n; i++)
    for (int j = 0; j < m; j++)
      if (a[i][j] == 2)
        dfs(i, j);
  int ans = 0;
  for (int i = 0; i < n; i++)
    for (int j = 0; j < m; j++)
      if (!visited[i][j] && a[i][j] == 0)
        ans++;
  return ans;
}

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);

  cin >> n >> m;

  for (int i = 0; i < n; i++)
    for (int j = 0; j < m; j++)
    {
      cin >> a[i][j];
      if (!a[i][j])
        v.push_back({i, j});
    }

  int ans = 0;
  for (int i = 0; i < v.size(); i++)
    for (int j = 0; j < i; j++)
      for (int k = 0; k < j; k++)
      {
        a[v[i].first][v[i].second] = a[v[j].first][v[j].second] = a[v[k].first][v[k].second] = 1;
        ans = max(ans, solve());
        a[v[i].first][v[i].second] = a[v[j].first][v[j].second] = a[v[k].first][v[k].second] = 0;
      }
  cout << ans;

  return 0;
}