#include <bits/stdc++.h>

using namespace std;

const int _MAX = 200000;
int visited[200001], _prev[200001], n, k, ret, curr, cnt, next;
vector<int> v;
queue<int> q;
int main()
{
  cin >> n >> k;
  visited[n] = 1;
  q.push(n);
  while (q.size())
  {
    curr = q.front();
    q.pop();
    if (curr == k)
    {
      ret = visited[k];
      break;
    }
    for (int next : {curr + 1, curr - 1, curr * 2})
    {
      if (next > _MAX || next < 0 || visited[next])
      {
        continue;
      }
      visited[next] = visited[curr] + 1;
      _prev[next] = curr;
      q.push(next);
    }
  }
  for (int i = k; i != n; i = _prev[i])
  {
    v.push_back(i);
  }
  v.push_back(n);
  cout << ret - 1 << '\n';
  reverse(v.begin(), v.end());
  for (int i : v)
  {
    cout << i << ' ';
  }
  return 0;
}