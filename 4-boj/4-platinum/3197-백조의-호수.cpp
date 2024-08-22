#include <bits/stdc++.h>

using namespace std;

vector<pair<int, int>> dirs = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};
int visited_swan[1500][1500], visited[1500][1500], r, c, cnt, swanY, swanX, y, x;
char lake[1500][1500];
queue<pair<int, int>> waterQ, water_tempQ, swanQ, swan_tempQ;

void Qclear(queue<pair<int, int>> &q)
{
  queue<pair<int, int>> empty;
  swap(q, empty);
}

void water_melting()
{
  while (waterQ.size())
  {
    tie(y, x) = waterQ.front();
    waterQ.pop();
    for (auto dir : dirs)
    {
      int ny = y + dir.first;
      int nx = x + dir.second;
      if (ny < 0 || ny >= r || nx < 0 || nx >= c || visited[ny][nx])
      {
        continue;
      }
      if (lake[ny][nx] == 'X')
      {
        visited[ny][nx] = 1;
        water_tempQ.push({ny, nx});
        lake[ny][nx] = '.';
      }
    }
  }
}

bool move_swan()
{
  while (swanQ.size())
  {
    tie(y, x) = swanQ.front();
    swanQ.pop();
    for (auto dir : dirs)
    {
      int ny = y + dir.first;
      int nx = x + dir.second;
      if (ny < 0 || ny >= r || nx < 0 || nx >= c || visited_swan[ny][nx])
      {
        continue;
      }
      visited_swan[ny][nx] = 1;
      if (lake[ny][nx] == '.')
      {
        swanQ.push({ny, nx});
      }
      else if (lake[ny][nx] == 'X')
      {
        swan_tempQ.push({ny, nx});
      }
      else if (lake[ny][nx] == 'L')
      {
        return true;
      }
    }
  }
  return false;
}

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  cin >> r >> c;

  for (int i = 0; i < r; i++)
  {
    for (int j = 0; j < c; j++)
    {
      cin >> lake[i][j];
      if (lake[i][j] == 'L')
      {
        swanY = i;
        swanX = j;
      }
      if (lake[i][j] == '.' || lake[i][j] == 'L')
      {
        visited[i][j] = 1, waterQ.push({i, j});
      }
    }
  }
  swanQ.push({swanY, swanX});
  visited_swan[swanY][swanX] = 1;
  while (!move_swan())
  {
    water_melting();
    waterQ = water_tempQ;
    swanQ = swan_tempQ;
    Qclear(water_tempQ);
    Qclear(swan_tempQ);
    cnt++;
  }
  cout << cnt << "\n";
  return 0;
}
