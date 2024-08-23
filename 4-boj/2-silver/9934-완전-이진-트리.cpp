#include <bits/stdc++.h>

using namespace std;

vector<int> ret[10];
int n, a[1023];

void divide(int s, int e, int level)
{
  if (s > e)
  {
    return;
  }
  if (s == e)
  {
    ret[level].push_back(a[s]);
    return;
  }
  int mid = (s + e) / 2;
  ret[level].push_back(a[mid]);
  divide(s, mid - 1, level + 1);
  divide(mid + 1, e, level + 1);
  return;
}

int main()
{
  cin >> n;
  int _end = pow(2, n) - 1;
  for (int i = 0; i < _end; i++)
  {
    cin >> a[i];
  }
  divide(0, _end, 1);
  for (int i = 1; i <= n; i++)
  {
    for (int j : ret[i])
    {
      cout << j << " ";
    }
    cout << "\n";
  }
  return 0;
}