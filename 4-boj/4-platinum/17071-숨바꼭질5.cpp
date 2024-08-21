#include <bits/stdc++.h>

using namespace std;

const int _MAX = 500000;
int visited[2][_MAX + 1], n, k, ok, turn = 1;
queue<int> q;

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);

  cin >> n >> k;

  if (n == k)
  {
    cout << 0 << "\n";
    return 0;
  }

  visited[0][n] = 1;
  q.push(n);

  while (q.size())
  {
    k += turn;
    if (k > _MAX)
    {
      break;
    }
    if (visited[turn % 2][k])
    {
      ok = true;
      break;
    }
    int qSize = q.size();
    for (int i = 0; i < qSize; i++)
    {
      int curr = q.front();
      q.pop();
      for (int next : {curr + 1, curr - 1, curr * 2})
      {
        if (next < 0 || next > _MAX || visited[turn % 2][next])
        {
          continue;
        }
        visited[turn % 2][next] = visited[(turn + 1) % 2][curr] + 1;
        if (next == k)
        {
          ok = 1;
          break;
        }
        q.push(next);
      }
      if (ok)
      {
        break;
      }
    }
    if (ok)
    {
      break;
    }
    turn++;
  }
  if (ok)
  {
    cout << turn << "\n";
  }
  else
  {
    cout << -1 << "\n";
  }
  return 0;
}
