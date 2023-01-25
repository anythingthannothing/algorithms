#include <bits/stdc++.h>

using namespace std;

int n, ret = 987654321, arr[10][10], price[10][10];
vector<pair<int, int>> dirs = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

int setFlower(int y, int x)
{
  arr[y][x] = 1;
  int s = price[y][x];
  for (auto dir : dirs)
  {
    int ny = y + dir.first;
    int nx = x + dir.second;
    arr[ny][nx] = 1;
    s += price[ny][nx];
  }
  return s;
}

bool check(int y, int x)
{
  if (arr[y][x])
    return false;
  for (auto dir : dirs)
  {
    int ny = y + dir.first;
    int nx = x + dir.second;
    if (ny < 0 || ny >= n || nx < 0 || nx >= n || arr[ny][nx])
    {
      return false;
    }
  }
  return true;
}

void eraseFlower(int y, int x)
{
  arr[y][x] = 0;
  for (auto dir : dirs)
  {
    int ny = y + dir.first;
    int nx = x + dir.second;
    arr[ny][nx] = 0;
  }
}

void flower(int cnt, int hap)
{
  if (cnt == 3)
  {
    ret = min(ret, hap);
    return;
  }
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < n; j++)
    {
      if (check(i, j))
      {
        flower(cnt + 1, hap + setFlower(i, j));
        eraseFlower(i, j);
      }
    }
  }
}

int main()
{
  cin >> n;
  for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
    {
      cin >> price[i][j];
    }

  flower(0, 0);
  cout << ret;
}