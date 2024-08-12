#include <bits/stdc++.h>

using namespace std;

int n, r, c, nr, nc, ret = 1, arr[100][100], visited[100][100];
pair<int, int> dirs[4] = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

void DFS(int r, int c, int h)
{
  visited[r][c] = 1;
  for (pair<int, int> dir : dirs)
  {
    nr = r + dir.first;
    nc = c + dir.second;
    if (nr < 0 || nc < 0 || nr >= n || nc >= n || visited[nr][nc])
    {
      continue;
    }
    if (arr[nr][nc] > h)
    {
      DFS(nr, nc, h);
    }
  }
  return;
}

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);

  cin >> n;

  for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
    {
      cin >> arr[i][j];
    }

  for (int h = 1; h <= 100; h++)
  {
    fill(&visited[0][0], &visited[0][0] + 100 * 100, 0);
    int cnt = 0;
    for (int i = 0; i < n; i++)
    {
      for (int j = 0; j < n; j++)
      {
        if (arr[i][j] > h && !visited[i][j])
        {
          DFS(i, j, h);
          cnt++;
        }
      }
    }
    ret = max(ret, cnt);
  }
  cout << ret << "\n";
  return 0;
}