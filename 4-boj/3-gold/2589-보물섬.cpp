#include <bits/stdc++.h>

using namespace std;

int n, m, _max, visited[50][50];
vector<pair<int, int>> dirs = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};
char pMap[50][50];

void BFS(int y, int x)
{
  memset(visited, 0, sizeof(visited));
  visited[y][x] = 1;
  queue<pair<int, int>> q;
  q.push({y, x});
  while (q.size())
  {
    tie(y, x) = q.front();
    q.pop();
    for (auto dir : dirs)
    {
      int ny = y + dir.first;
      int nx = x + dir.second;
      if (ny < 0 || ny >= n || nx < 0 || nx >= m || visited[ny][nx] || pMap[ny][nx] == 'W')
      {
        continue;
      }
      visited[ny][nx] = visited[y][x] + 1;
      q.push({ny, nx});
      _max = max(_max, visited[ny][nx]);
    }
  }
  return;
}

int main()
{
  cin >> n >> m;

  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < m; j++)
    {
      cin >> pMap[i][j];
    }
  }

  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < m; j++)
    {
      if (pMap[i][j] == 'L')
      {
        BFS(i, j);
      }
    }
  }
  cout << _max - 1 << "\n";
  return 0;
}