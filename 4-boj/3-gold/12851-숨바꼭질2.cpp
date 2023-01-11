#include <bits/stdc++.h>

using namespace std;

const int MAX = 200001;
int visited[MAX];
long long cnt[MAX];
int n, k;
queue<int> q;

int main()
{
  cin >> n >> k;

  if (n == k)
  {
    cout << "0"
         << "\n"
         << "1";
    return 0;
  }

  visited[n] = 1;
  cnt[n] = 1;
  q.push(n);
  while (q.size())
  {
    int curr = q.front();
    q.pop();
    for (int next : {curr - 1, curr + 1, curr * 2})
    {
      if (0 <= next && next <= MAX)
      {
        if (!visited[next])
        {
          q.push(next);
          visited[next] = visited[curr] + 1;
          cnt[next] += cnt[curr];
        }
        else if (visited[next] == visited[curr] + 1)
        {
          cnt[next] += cnt[curr];
        }
      }
    }
  }
  cout << visited[k] - 1 << '\n';
  cout << cnt[k] << '\n';
  return 0;
}