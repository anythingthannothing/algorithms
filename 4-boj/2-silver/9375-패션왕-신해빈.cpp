#include <bits/stdc++.h>

using namespace std;

int t, n;
string a, b;

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> t;
  while (t--)
  {
    map<string, int> cMap;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
      cin >> a >> b;
      cMap[b]++;
    }
    long long ret = 1;
    for (auto c : cMap)
      ret *= (c.second + 1);

    ret--;
    cout << ret << "\n";
  }

  return 0;
}