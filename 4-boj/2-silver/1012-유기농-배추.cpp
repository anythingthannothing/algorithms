#include <bits/stdc++.h>

using namespace std;

int t, n, m, k, r, c, nr, nc, ret;
int arr[50][50];
bool visited[50][50];
pair<int, int> dirs[4] = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

void DFS(int r, int c)
{
  for (pair<int, int> dir : dirs)
  {
    nr = r + dir.first;
    nc = c + dir.second;
    if (nr < 0 || nr >= n || nc < 0 || nc >= m || visited[nr][nc])
    {
      continue;
    }
    if (arr[nr][nc] == 1)
    {
      visited[nr][nc] = 1;
      DFS(nr, nc);
    }
  }
  return;
}

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);

  cin >> t;

  while (t--)
  {
    fill(&arr[0][0], &arr[0][0] + 50 * 50, 0);
    fill(&visited[0][0], &visited[0][0] + 50 * 50, 0);
    ret = 0;
    cin >> m >> n >> k;
    for (int i = 0; i < k; i++)
    {
      cin >> c >> r;
      arr[r][c] = 1;
    }
    for (int i = 0; i < n; i++)
      for (int j = 0; j < m; j++)
      {
        if (arr[i][j] == 1 && !visited[i][j])
        {
          DFS(i, j);
          ret++;
        }
      }
    cout << ret << "\n";
  }

  return 0;
}