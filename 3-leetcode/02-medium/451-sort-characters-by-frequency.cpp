#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  string frequencySort(string s)
  {
    int n = s.size();
    unordered_map<char, int> fMap;
    for (char c : s)
      fMap[c]++;

    vector<vector<char>> bucket(n + 1);
    for (auto [c, f] : fMap)
      bucket[f].push_back(c);

    string ans;
    for (int freq = n; freq >= 1; --freq)
      for (char c : bucket[freq])
        ans.append(freq, c);
    return ans;
  }
};