#include <bits/stdc++.h>

using namespace std;

// Solution with Recursive
class Solution
{
public:
  void recur(vector<char> &s, int start, int end)
  {
    if (left >= right)
      return;
    swap(s[start++], s[end--]);
    recur(s, start, end);
  }
  void reverseString(vector<char> &s)
  {
    recur(s, 0, s.size() - 1);
  }
};

// Solution with Iterative
// class Solution
// {
// public:
//   void reverseString(vector<char> &s)
//   {
//     int start = 0, end = s.size() - 1;
//     char temp;
//     while (start < end)
//     {
//       temp = s[end];
//       s[end--] = s[start];
//       s[start++] = temp;
//     }
//   }
// };