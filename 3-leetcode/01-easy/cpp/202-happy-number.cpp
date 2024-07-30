#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  int digitSum(int num)
  {
    int sum = 0;
    while (num > 0)
    {
      sum += pow(num % 10, 2);
      num /= 10;
    }
    return sum;
  }
  bool isHappy(int n)
  {
    set<int> seen;
    while (n != 1 && seen.find(n) == seen.end())
    {
      seen.insert(n);
      n = digitSum(n);
    }
    return n == 1;
  }
};