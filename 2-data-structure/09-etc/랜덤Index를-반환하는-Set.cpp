// 출처: https://leetcode.com/problems/insert-delete-getrandom-o1/

#include <bits/stdc++.h>

using namespace std;

class RandomizedSet
{
private:
  vector<int> nums;            // 랜덤 액세스(O(1))를 위한 자료구조
  unordered_map<int, int> map; // <Value, Index in nums>쌍을 저장하기 위한 자료구조

public:
  RandomizedSet()
  {
    // private 프로퍼티를 활용하여 별도 구현 X
  }

  bool insert(int val)
  {
    if (map.find(val) != map.end()) // 중복된 값이 있을 경우
      return false;
    nums.push_back(val);
    map[val] = nums.size() - 1;
    return true;
  }

  bool remove(int val)
  {
    if (map.find(val) == map.end()) // 제거하려는 값이 없을 경우
      return false;
    int temp = nums.back(); // 마지막 요소를 복사하고,
    map[temp] = map[val];   // 제거하려는 값의 Index를 마지막 요소의 Index로 저장한 이후,
    nums[map[val]] = temp;  // 제거하려는 값의 Index에 마지막 요소를 삽입.
    nums.pop_back();        // 마지막 요소 제거
    map.erase(val);         // 맵에서 제거된 요소의 <value, index>쌍을 제거
    return true;
  }

  int getRandom()
  {
    return nums[rand() % nums.size()]; // 임의의 정수를 nums의 크기로 나눈 나머지를 통해 랜덤 액세스
  }
};