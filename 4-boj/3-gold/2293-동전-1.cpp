#include <bits/stdc++.h>

using namespace std;

int n, k, curr, a[10001];

int main()
{
  cin >> n >> k;
  a[0] = 1;

  while (n--)
  {
    cin >> curr;
    for (int i = curr; i <= k; i++)
    {
      if (curr > 10000)
        continue;
      a[i] = a[i] + a[i - curr];
    }
  }

  cout << a[k];

  return 0;
}