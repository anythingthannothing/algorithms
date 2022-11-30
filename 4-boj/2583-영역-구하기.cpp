#include <bits/stdc++.h>

using namespace std;

int m, n, k, ny, nx, leftX, leftY, rightX, rightY, curr, cnt, arr[101][101], visited[101][101];
vector<int> ret;
vector<vector<int>> dirs = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

int DFS(int y, int x)
{
  int ret = 1;
  visited[y][x] = 1;
  for (auto &p : dirs)
  {
    ny = y + p[0];
    nx = x + p[1];
    if (ny < 0 || nx < 0 || ny >= n || nx >= m || visited[ny][nx])
      continue;
    if (!arr[ny][nx])
      ret += DFS(ny, nx);
  }
  return ret;
}

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);

  cin >> n >> m >> k;

  while (k--)
  {
    cin >> leftX >> leftY >> rightX >> rightY;
    for (int i = leftY; i < rightY; i++)
      for (int j = leftX; j < rightX; j++)
      {
        arr[i][j] = 1;
      }
  }

  for (int i = 0; i < n; i++)
    for (int j = 0; j < m; j++)
      if (!arr[i][j] && !visited[i][j])
      {
        ret.push_back(DFS(i, j));
      }

  cout << ret.size() << "\n";
  sort(ret.begin(), ret.end());
  for (int area : ret)
    cout << area << " ";

  return 0;
}