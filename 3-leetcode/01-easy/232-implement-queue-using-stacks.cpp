#include <bits/stdc++.h>

using namespace std;

class MyQueue
{
public:
  stack<int> s1;
  stack<int> s2;

  MyQueue()
  {
  }

  void push(int x)
  {
    while (!s2.empty())
    {
      s1.push(s2.top());
      s2.pop();
    }
    s1.push(x);
  }

  int pop()
  {
    while (!s1.empty())
    {
      s2.push(s1.top());
      s1.pop();
    }
    int x = s2.top();
    s2.pop();
    return x;
  }

  int peek()
  {
    while (!s1.empty())
    {
      s2.push(s1.top());
      s1.pop();
    }
    int x = s2.top();
    return x;
  }

  bool empty()
  {
    if (!s2.empty() || !s1.empty())
    {
      return false;
    }
    return true;
  }
};