#include <bits/stdc++.h>

using namespace std;

int n, m;
string s;
map<string, int> sMap;
string iMap[100001];

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n >> m;

  for (int i = 1; i <= n; i++)
  {
    cin >> s;
    sMap[s] = i;
    iMap[i] = s;
  }

  for (int i = 0; i < m; i++)
  {
    cin >> s;
    if (atoi(s.c_str()) == 0)
    {
      cout << sMap[s] << "\n";
    }
    else
      cout << iMap[atoi(s.c_str())] << "\n";
  }

  return 0;
}