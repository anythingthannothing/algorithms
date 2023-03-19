#include <bits/stdc++.h>

using namespace std;

int n, a[1000], ans, _max, maxIndex;

int main()
{
  cin >> n;

  for (int i = 0; i < n; i++)
  {
    cin >> a[i];
    if (a[i] > _max)
    {
      _max = max(_max, a[i]);
      maxIndex = i;
    }
  }

  for (int i = 0; i < n; i++)
  {
    if (i != maxIndex)
    {
      ans += _max + a[i];
    }
  }

  cout << ans;

  return 0;
}