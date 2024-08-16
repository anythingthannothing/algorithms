#include <bits/stdc++.h>

using namespace std;

int n, m, cheeseCount, hour;
int arr[100][100], visited[100][100];
vector<pair<int, int>> cheeses;
vector<pair<int, int>> dirs = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

void meltCheese(int y, int x)
{
  visited[y][x] = 1;
  if (arr[y][x] == 1)
  {
    cheeses.push_back({y, x});
    return;
  }
  for (pair<int, int> dir : dirs)
  {
    int ny = y + dir.first;
    int nx = x + dir.second;
    if (ny < 0 || nx < 0 || ny >= n || nx >= m || visited[ny][nx])
    {
      continue;
    }
    meltCheese(ny, nx);
  }
  return;
}

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);

  cin >> n >> m;

  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < m; j++)
    {
      cin >> arr[i][j];
    }
  }

  while (true)
  {
    memset(visited, 0, sizeof(visited));
    cheeses.clear();
    cheeseCount = 0;
    meltCheese(0, 0);

    for (pair<int, int> cheese : cheeses)
    {
      cheeseCount++;
      arr[cheese.first][cheese.second] = 0;
    }

    bool flag = false;

    for (int i = 0; i < n; i++)
    {
      for (int j = 0; j < m; j++)
      {
        if (arr[i][j] == 1)
        {
          flag = 1;
        }
      }
    }

    hour++;

    if (!flag)
    {
      break;
    }
  }

  cout << hour << "\n"
       << cheeseCount;
  return 0;
}