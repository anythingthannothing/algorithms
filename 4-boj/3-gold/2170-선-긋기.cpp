#include <bits/stdc++.h>

using namespace std;

int n, a, b, l, r, ret;
vector<pair<int, int>> v;

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);
  cin >> n;

  for (int i = 0; i < n; i++)
  {
    cin >> a >> b;
    v.push_back({a, b});
  }

  sort(v.begin(), v.end());

  l = v[0].first;
  r = v[0].second;

  for (int i = 1; i < n; i++)
  {
    a = v[i].first;
    b = v[i].second;
    if (r < a)
    {
      ret += r - l;
      l = a;
      r = b;
    }
    else if (r >= a && r <= b)
    {
      r = b;
    }
  }

  ret += r - l;

  cout << ret;
  return 0;
}