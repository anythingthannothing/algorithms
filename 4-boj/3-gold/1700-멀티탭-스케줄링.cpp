#include <bits/stdc++.h>

using namespace std;

int k, n, a[104], plugged[104], cnt;
const int INF = 987654321;
vector<int> v;

int main()
{
  cin >> k >> n;
  for (int i = 0; i < n; i++)
  {
    cin >> a[i];
  }

  for (int i = 0; i < n; i++)
  {
    if (!plugged[a[i]])
    {
      if (v.size() == k)
      {
        int last_idx = 0, pos;
        for (int _a : v)
        {
          int here_pick = INF;
          for (int j = i + 1; j < n; j++)
          {
            if (_a == a[j])
            {
              here_pick = j;
              break;
            }
          }
          if (last_idx < here_pick)
          {
            last_idx = here_pick;
            pos = _a;
          }
        }
        plugged[pos] = 0;
        cnt++;
        v.erase(find(v.begin(), v.end(), pos));
      }
      v.push_back(a[i]);
      plugged[a[i]] = 1;
    }
  }

  cout << cnt << "\n";

  return 0;
}
