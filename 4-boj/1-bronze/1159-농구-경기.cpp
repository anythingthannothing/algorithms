#include <bits/stdc++.h>

using namespace std;

int cnt[26];
int n;
string curr, result;

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;

  for (int i = 0; i < n; i++)
  {
    cin >> curr;
    cnt[curr[0] - 'a']++;
  }

  for (int i = 0; i < 26; i++)
  {
    if (cnt[i] >= 5)
      result += (i + 'a');
  }
  if (result.length())
  {
    cout << result;
  }
  else
  {
    cout << "PREDAJA";
  }

  return 0;
}