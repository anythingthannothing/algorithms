#include <bits/stdc++.h>

using namespace std;

int n, r, c, nr, nc, ret = 1, arr[101][101], visited[101][101];
vector<vector<int>> dirs = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

void DFS(int r, int c, int h)
{
  visited[r][c] = 1;
  for (int i = 0; i < 4; i++)
  {
    nr = r + dirs[i][0];
    nc = c + dirs[i][1];
    if (nr < 0 || nc < 0 || nr >= n || nc >= n)
      continue;
    if (arr[nr][nc] > h && !visited[nr][nc])
      DFS(nr, nc, h);
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

  for (int h = 1; h < 101; h++)
  {
    fill(&visited[0][0], &visited[0][0] + 101 * 101, 0);
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