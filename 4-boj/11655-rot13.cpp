#include <bits/stdc++.h>

using namespace std;

string s;

int main()
{
  getline(cin, s);
  for (int i = 0; i < s.size(); i++)
  {
    if (s[i] >= 65 && s[i] <= 90)
      s[i] = s[i] + 13 > 90 ? s[i] + 13 - 26 : s[i] + 13;
    else if (s[i] >= 97 && s[i] <= 122)
      s[i] = s[i] + 13 > 122 ? s[i] + 13 - 26 : s[i] + 13;
    cout << s[i];
  }
  return 0;
}
