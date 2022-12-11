#include <bits/stdc++.h>

using namespace std;

int n, c, num[1001];
vector<pair<int, int>> v;
unordered_map<int, int> cMap, iMap;

bool cmp(pair<int, int> a, pair<int, int> b)
{
  if (a.first == b.first)
  {
    return iMap[a.second] < iMap[b.second]; // 인덱스를 기준으로 오름차순
  }
  return a.first > b.first; // 빈도수를 기준으로 내림차순
}

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);
  cin >> n >> c;
  for (int i = 0; i < n; i++)
  {
    cin >> num[i];
    cMap[num[i]]++;
    if (iMap.find(num[i]) == iMap.end())
      iMap[num[i]] = i;
  }
  for (auto it : cMap)
  {
    v.push_back({it.second, it.first});
  }
  sort(v.begin(), v.end(), cmp);
  for (auto i : v)
    for (int j = 0; j < i.first; j++)
    {
      cout << i.second << " ";
    }

  return 0;
}
