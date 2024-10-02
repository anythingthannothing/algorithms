#include <bits/stdc++.h>

using namespace std;

int n, l, lt, rt, b, idx, ret;
priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;

int main()
{
  cin >> n >> l;

  for (int i = 0; i < n; i++)
  {
    cin >> lt >> rt;
    pq.push({lt, rt});
  }

  while (pq.size())
  {
    tie(lt, rt) = pq.top();
    pq.pop();
    if (rt <= idx)
      continue;
    if (idx < lt)
    {
      b = (rt - lt) / l + ((rt - lt) % l ? 1 : 0);
      idx = lt + b * l;
    }
    else
    {
      b = (rt - idx) / l + ((rt - idx) % l ? 1 : 0);
      idx = idx + b * l;
    }
    ret += b;
  }
  cout << ret << '\n';

  return 0;
}