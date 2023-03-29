#include <bits/stdc++.h>

using namespace std;

int n, k, a[10001], curr, INF = 1e9;

int main()
{
  cin >> n >> k;
  fill(a, a + 10001, INF);
  a[0] = 0;

  for (int i = 0; i < n; i++)
  {
    cin >> curr;
    for (int j = curr; j <= k; j++)
    {
      a[j] = min(a[j], a[j - curr] + 1);
    }
  }
  if (a[k] == INF)
    cout << -1 << "\n";
  else
    cout << a[k] << "\n";
  return 0;
}