#include <bits/stdc++.h>

using namespace std;

int r, c, ret, seen[26];
char arr[20][20];
vector<pair<int, int>> dirs = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

void dfs(int row, int col, int step)
{
  ret = max(ret, step);
  for (pair<int, int> dir : dirs)
  {
    int nextRow = row + dir.first;
    int nextCol = col + dir.second;

    if (nextRow < 0 || nextRow >= r || nextCol < 0 || nextCol >= c)
    {
      continue;
    }
    int next = arr[nextRow][nextCol] - 'A';

    if (seen[next])
    {
      continue;
    }

    seen[next] = 1;
    dfs(nextRow, nextCol, step + 1);
    seen[next] = 0;
  }
  return;
}

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);

  cin >> r >> c;

  for (int i = 0; i < r; i++)
  {
    for (int j = 0; j < c; j++)
    {
      cin >> arr[i][j];
    }
  }
  seen[arr[0][0] - 'A'] = 1;
  dfs(0, 0, 1);

  cout << ret;

  return 0;
}