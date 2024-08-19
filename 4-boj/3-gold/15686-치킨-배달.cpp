#include <bits/stdc++.h>

using namespace std;

int n, m, temp, a[50][50];
int result = INT_MAX;
vector<vector<int>> chickenList;
vector<pair<int, int>> home, chicken;

void combi(int start, vector<int> v)
{
  if (v.size() == m)
  {
    chickenList.push_back(v);
    return;
  }

  for (int i = start; i < chicken.size(); i++)
  {
    v.push_back(i);
    combi(i + 1, v);
    v.pop_back();
  }
  return;
}

int main()
{

  cin >> n >> m;
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < n; j++)
    {
      cin >> a[i][j];
      if (a[i][j] == 1)
      {
        home.push_back({i, j});
      }
      if (a[i][j] == 2)
      {
        chicken.push_back({i, j});
      }
    }
  }

  vector<int> v;
  combi(0, v);
  for (vector<int> cList : chickenList)
  {
    int ret = 0;
    for (pair<int, int> dir : home)
    {
      int _min = INT_MAX;
      for (int ch : cList)
      {
        int _dist = abs(dir.first - chicken[ch].first) + abs(dir.second - chicken[ch].second);
        _min = min(_min, _dist);
      }
      ret += _min;
    }
    result = min(result, ret);
  }
  cout << result << "\n";
  return 0;
}