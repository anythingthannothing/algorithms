#include <bits/stdc++.h>

using namespace std;

int n, k, visited[200001];
queue<int> q;

int main()
{
  cin >> n >> k;

  if (n == k)
  {
    cout << "0";
    return 0;
  }

  visited[n] = 1;
  q.push(n);
  while (q.size())
  {
    int curr = q.front();
    q.pop();
    if (curr == k)
      break;
    for (int next : {curr + 1, curr - 1, curr * 2})
      if (next >= 0 && next <= 200000 && !visited[next])
      {
        visited[next] = visited[curr] + 1;
        q.push(next);
      }
  }
  cout << visited[k] - 1;
  return 0;
}