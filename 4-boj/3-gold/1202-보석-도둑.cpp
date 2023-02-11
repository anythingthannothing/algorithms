#include <bits/stdc++.h>

using namespace std;

long long n, m, v, k, c, ret;
vector<pair<long long, long long>> jewel;
vector<long long> kArray;
priority_queue<long long> pq;

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);

  cin >> n >> k;
  int temp = n;
  while (temp--)
  {
    cin >> m >> v;
    jewel.push_back({m, v});
  }

  while (k--)
  {
    cin >> c;
    kArray.push_back(c);
  }
  sort(kArray.begin(), kArray.end());
  sort(jewel.begin(), jewel.end());

  int j = 0;
  for (int i = 0; i < kArray.size(); i++)
  {
    while (j < n && jewel[j].first <= kArray[i])
    {
      pq.push(jewel[j++].second);
    }
    if (pq.size())
    {
      ret += pq.top();
      pq.pop();
    }
  }

  cout << ret;

  return 0;
}