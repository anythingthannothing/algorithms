#include <bits/stdc++.h>

using namespace std;

long long s, e, seen[100001], a[100001], n;
long long ret;

int main()
{
  cin >> n;
  for (int i = 0; i < n; i++)
  {
    cin >> a[i];
  }
  while (e < n)
  {
    if (!seen[a[e]])
    {
      seen[a[e]]++;
      e++;
    }
    else
    {
      ret += (e - s);
      seen[a[s]]--;
      s++;
    }
  }
  ret += (e - s) * (e - s + 1) / 2;
  cout << ret;
  return 0;
}