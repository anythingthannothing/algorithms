#include <bits/stdc++.h>

using namespace std;

int cnt[26];
string s, ret;
char mid;
int flag;

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);

  cin >> s;

  for (char c : s)
    cnt[c - 'A']++;
  for (int i = 25; i >= 0; i--)
  {
    if (cnt[i] & 1)
    {
      mid = char(i + 'A');
      flag++;
      cnt[i]--;
    }
    if (flag == 2)
    {
      cout << "I'm Sorry Hansoo\n";
      return 0;
    }
    for (int j = 0; j < cnt[i]; j += 2)
    {
      ret = char(i + 'A') + ret;
      ret += char(i + 'A');
    }
  }
  if (mid)
    ret.insert(ret.begin() + ret.size() / 2, mid);
  cout << ret;

  return 0;
}