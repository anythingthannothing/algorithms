#include <bits/stdc++.h>

using namespace std;

int n, k;
int ret = INT_MIN;
vector<int> arr;

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n >> k;

  for (int i = 0; i < n; i++)
  {
    int curr;
    cin >> curr;
    arr.push_back(curr);
  }
  int temp = 0;
  for (int i = 0; i < k; i++)
    temp += arr[i];
  ret = max(ret, temp);

  for (int i = 0, j = k; j < n; i++, j++)
  {
    temp += arr[j] - arr[i];
    ret = max(ret, temp);
  }

  cout << ret;
  return 0;
}