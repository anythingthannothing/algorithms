#include <bits/stdc++.h>

using namespace std;

struct ListNode
{
  int val;
  ListNode *next;
  ListNode() : val(0), next(nullptr) {}
  ListNode(int x) : val(x), next(nullptr) {}
  ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution
{
public:
  ListNode *reverseList(ListNode *head)
  {
    ListNode *prev = nullptr;
    ListNode *curr = head;
    ListNode *next = head->next;
    while (curr)
    {
      curr->next = prev;
      curr = next;
      next = next->next;
      prev = curr;
    }
    return prev;
  }
};

// class Solution
// {
// public:
//   ListNode *reverseList(ListNode *head, ListNode *prev = nullptr)
//   {
//     return head ? reverseList(head->next, (head->next = prev, head)) : prev;
//   }
// };