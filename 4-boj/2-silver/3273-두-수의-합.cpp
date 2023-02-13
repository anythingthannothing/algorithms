#include <bits/stdc++.h>

using namespace std;

// 풀이 1 - Two Pointers
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
      r--, answer++;
    else if (a[l] + a[r] > target)
      r--;
    else if (a[l] + a[r] < target)
      l++;
  }
  cout << answer;
  return 0;
}

// 풀이 2 - Hash Map
int n, arr[100000], target, answer, curr;
unordered_map<int, int> numMap;

int main()
{
  cin >> n;
  for (int i = 0; i < n; i++)
  {
    cin >> arr[i];
    numMap[arr[i]] = i;
  }
  cin >> target;

  for (int i = 0; i < n; i++)
  {
    curr = target - arr[i];
    if (numMap.find(curr) != numMap.end())
    {
      answer++;
    }
  }

  cout << answer / 2;

  return 0;
}