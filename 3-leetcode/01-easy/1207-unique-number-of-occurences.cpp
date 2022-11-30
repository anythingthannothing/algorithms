#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  bool uniqueOccurrences(vector<int> &arr)
  {
    unordered_map<int, int> freqMap;
    unordered_set<int> freqSet;

    for (int num : arr)
      freqMap[num]++;
    for (auto [key, value] : freqMap)
      if (!freqSet.insert(value).second)
        return false;
    return true;
  }
};