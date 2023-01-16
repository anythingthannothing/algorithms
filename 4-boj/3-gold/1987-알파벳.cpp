#include <bits/stdc++.h>

using namespace std;

int r, c, ret;
char arr[20][20], seen[26];
vector<pair<int, int>> dirs = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

int dfs(int row, int col, int step)
{
  int curr = arr[row][col] - 'A';
  if (row < 0 || row >= r || col < 0 || col >= c || seen[curr])
    return step;
  seen[curr] = 1;
  for (pair<int, int> dir : dirs)
  {
    int nextRow = row + dir.first;
    int nextCol = col + dir.second;
    int temp = dfs(nextRow, nextCol, step + 1);
    ret = max(ret, temp);
  }
  seen[curr] = 0;
  return ret;
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

  ret = dfs(0, 0, 0);

  cout << ret;

  return 0;
}