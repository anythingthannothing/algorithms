#include <bits/stdc++.h>

using namespace std;

string vowels = "aeiouAEIOU";

class Solution
{
public:
  bool halvesAreAlike(string S)
  {
    int mid = S.length() / 2, ans = 0;
    for (int i = 0, j = mid; i < mid; i++, j++)
    {
      if (~vowels.find(S[i]))
        ans++;
      if (~vowels.find(S[j]))
        ans--;
    }
    return !ans;
  }

  bool halvesAreAlike2(string s)
  {
    int vowelDiff = 0, mid = size(s) / 2;
    for (int i = 0; i < mid; i++)
      vowelDiff += isVowel(s[i]) - isVowel(s[mid + i]);
    return !vowelDiff;
  }
  bool isVowel(char &c)
  {
    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U';
  }
};
