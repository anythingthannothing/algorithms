#include <bits/stdc++.h>

using namespace std;

int r, c, k, visited[5][5];
char arr[5][5];
vector<pair<int, int>> dirs = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};
string s;

int go(int y, int x)
{
  if (y == 0 && x == c - 1)
  {
    if (k == visited[y][x])
      return 1;
    return 0;
  }
  int ret = 0;
  for (auto dir : dirs)
  {
    int ny = y + dir.first;
    int nx = x + dir.second;
    if (ny < 0 || ny >= r || nx < 0 || nx >= c || visited[ny][nx] || arr[ny][nx] == 'T')
      continue;
    visited[ny][nx] = visited[y][x] + 1;
    ret += go(ny, nx);
    visited[ny][nx] = 0;
  }
  return ret;
}

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);

  cin >> r >> c >> k;

  for (int i = 0; i < r; i++)
  {
    cin >> s;
    for (int j = 0; j < c; j++)
    {
      arr[i][j] = s[j];
    }
  }

  visited[r - 1][0] = 1;
  cout << go(r - 1, 0) << "\n";

  return 0;
}