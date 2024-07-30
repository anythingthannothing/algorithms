#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
  vector<int> dailyTemperatures(vector<int> &T)
  {
    int n = T.size();
    vector<int> answer;
    stack<pair<int, int>> stk;
    for (int i = 0; i < n; i++)
    {
      answer.push_back(0);
    }

    for (int i = 0; i < n; i++)
    {
      while (!stk.empty() && stk.top().first < T[i])
      {
        int index = stk.top().second;
        stk.pop();
        answer[index] = i - index;
      }
      stk.push({T[i], i});
    }
    return answer;
  }
};