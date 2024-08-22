#include <bits/stdc++.h>

using namespace std;

char a[300][300];
int n, m, jx, jy, bx, by;
typedef pair<int, int> pii;
int visited[300][300];
pair<int, int> dirs[] = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};
int ret;
queue<int> q;

int main()
{
  scanf("%d %d", &n, &m);
  scanf("%d %d %d %d", &jy, &jx, &by, &bx);
  jy--, jx--, by--, bx--;

  for (int i = 0; i < n; i++)
  {
    scanf("%s", a[i]);
  }

  q.push(1000 * jy + jx);
  visited[jy][jx] = 1;
  int cnt = 0;
  while (a[by][bx] != '0')
  {
    cnt++;
    queue<int> temp;
    while (q.size())
    {
      int y = q.front() / 1000;
      int x = q.front() % 1000;
      q.pop();
      for (auto dir : dirs)
      {
        int ny = y + dir.first;
        int nx = x + dir.second;
        if (ny < 0 || ny >= n || nx < 0 || nx >= m || visited[ny][nx])
        {
          continue;
        }
        visited[ny][nx] = cnt;
        if (a[ny][nx] != '0')
        {
          a[ny][nx] = '0';
          temp.push(1000 * ny + nx);
        }
        else
        {
          q.push(1000 * ny + nx);
        }
      }
    }
    q = temp;
  }
  printf("%d\n", visited[by][bx]);
}