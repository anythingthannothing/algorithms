#include <bits/stdc++.h>

using namespace std;

int n, d, q;
long long ret;
vector<pair<int, int>> qArray;
// 오름차순 우선순위 큐
priority_queue<int, vector<int>, greater<int>> pq;

int main()
{
  cin >> n;

  while (n--)
  {
    cin >> d >> q;
    qArray.push_back({d, q});
  }
  sort(qArray.begin(), qArray.end());
  for (auto p : qArray)
  {
    pq.push(p.second);
    if (pq.size() > p.first)
    {
      pq.pop();
    }
  }
  while (pq.size())
  {
    ret += pq.top();
    pq.pop();
  }
  cout << ret;
  return 0;
}
