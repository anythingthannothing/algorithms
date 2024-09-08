#include <bits/stdc++.h>

using namespace std;

int n, answer, target;
int main()
{
  cin >> n;
  vector<int> a(n);
  for (int i = 0; i < n; i++)
    cin >> a[i];
  cin >> target;
  sort(a.begin(), a.end());
  int l = 0, r = n - 1;
  while (l < r)
  {
    if (a[l] + a[r] == target)
    {
      r--;
      answer++;
    }
    else if (a[l] + a[r] > target)
    {
      r--;
    }
    else if (a[l] + a[r] < target)
    {
      l++;
    }
  }
  cout << answer;
  return 0;
}