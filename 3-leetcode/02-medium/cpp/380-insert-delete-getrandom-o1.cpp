#include <bits/stdc++.h>

using namespace std;

class RandomizedSet
{
private:
  vector<int> nums;
  unordered_map<int, int> map;

public:
  RandomizedSet()
  {
  }

  bool insert(int val)
  {
    if (map.find(val) != map.end())
      return false;
    nums.push_back(val);
    map[val] = nums.size() - 1;
    return true;
  }

  bool remove(int val)
  {
    if (map.find(val) == map.end())
      return false;
    int last = nums.back();
    map[last] = map[val];
    nums[map[val]] = last;
    nums.pop_back();
    map.erase(val);
    return true;
  }

  int getRandom()
  {
    return nums[rand() % nums.size()];
  }
};