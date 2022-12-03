#include <bits/stdc++.h>

using namespace std;

string s;
int cCount, vCount;

bool isVowel(char c)
{
  return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
}

int main()
{
  while (true)
  {
    cin >> s;
    if (s == "end")
      break;
    cCount = vCount = 0;
    bool flag = 0;
    bool hasVowel = 0;
    char prev;
    for (int i = 0; i < s.size(); i++)
    {
      char curr = s[i];
      if (isVowel(curr))
        cCount++, vCount = 0, hasVowel = 1;
      else
        vCount++, cCount = 0;

      if (vCount == 3 || cCount == 3)
        flag = 1;

      if (i >= 1 && prev == curr && (curr != 'e' && curr != 'o'))
        flag = 1;

      prev = curr;
    }
    if (hasVowel == 0)
      flag = 1;

    if (flag)
      cout << "<" << s << "> is not acceptable.\n";
    else
      cout << "<" << s << "> is acceptable.\n";
  }
  return 0;
}