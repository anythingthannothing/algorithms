#include <bits/stdc++.h>

using namespace std;

char a[1000][1000];
int n, m, sx, sy, ret, y, x;
int fire_check[1000][1000], person_check[1000][1000];
vector<pair<int, int>> dirs = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

bool in(int a, int b)
{
  return 0 <= a && a < n && 0 <= b && b < m;
}

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(0);
  cout.tie(0);
  queue<pair<int, int>> q;
  cin >> n >> m;
  fill(&fire_check[0][0], &fire_check[0][0] + 1000 * 1000, INT_MAX);
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < m; j++)
    {
      cin >> a[i][j];
      if (a[i][j] == 'F')
      {
        fire_check[i][j] = 1;
        q.push({i, j});
      }
      else if (a[i][j] == 'J')
      {
        sy = i;
        sx = j;
      }
    }
  }

  while (q.size())
  {
    tie(y, x) = q.front();
    q.pop();
    for (auto dir : dirs)
    {
      int ny = y + dir.first;
      int nx = x + dir.second;
      if (!in(ny, nx))
        continue;
      if (fire_check[ny][nx] != INT_MAX || a[ny][nx] == '#')
        continue;
      fire_check[ny][nx] = fire_check[y][x] + 1;
      q.push({ny, nx});
    }
  }

  person_check[sy][sx] = 1;
  q.push({sy, sx});
  while (q.size())
  {
    int y = q.front().first;
    int x = q.front().second;
    q.pop();
    if (x == m - 1 || y == n - 1 || x == 0 || y == 0)
    {
      ret = person_check[y][x];
      break;
    }
    for (auto dir : dirs)
    {
      int ny = y + dir.first;
      int nx = x + dir.second;
      if (!in(ny, nx))
        continue;
      if (person_check[ny][nx] || a[ny][nx] == '#')
        continue;
      if (fire_check[ny][nx] <= person_check[y][x] + 1)
        continue;
      person_check[ny][nx] = person_check[y][x] + 1;
      q.push({ny, nx});
    }
  }
  if (ret != 0)
    cout << ret << "\n";
  else
    cout << "IMPOSSIBLE \n";
  return 0;
}