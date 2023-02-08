#include <bits/stdc++.h>

using namespace std;

int sum, n, p, d, schedule[10001];
vector<pair<int, int>> payPerDay;
priority_queue<int, vector<int>, greater<int>> pq;

int main()
{
  cin >> n;
  while (n--)
  {
    cin >> p >> d;
    payPerDay.push_back({d, p});
  }
  sort(payPerDay.begin(), payPerDay.end());
  for (auto it : payPerDay)
  {
    pq.push(it.second);
    if (pq.size() > it.first)
    {
      pq.pop();
    }
  }

  while (pq.size())
  {
    sum += pq.top();
    pq.pop();
  }
  cout << sum;
  return 0;
}