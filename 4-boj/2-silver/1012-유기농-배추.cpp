#include <bits/stdc++.h>

using namespace std;

int t, n, m, k, r, c, nr, nc, ret;
int arr[51][51];
bool visited[51][51];
vector<vector<int>> dirs = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

void DFS(int r, int c)
{
  for (int i = 0; i < 4; i++)
  {
    nr = r + dirs[i][0];
    nc = c + dirs[i][1];
    if (nr < 0 || nr >= n || nc < 0 || nc >= m)
      continue;
    if (arr[nr][nc] == 1 && !visited[nr][nc])
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
    fill(&arr[0][0], &arr[0][0] + 51 * 51, 0);
    fill(&visited[0][0], &visited[0][0] + 51 * 51, 0);
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