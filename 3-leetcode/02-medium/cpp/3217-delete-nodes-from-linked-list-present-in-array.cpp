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
    ListNode *modifiedList(vector<int> &nums, ListNode *head)
    {
        unordered_map<int, bool> map;

        for (int num : nums)
        {
            map[num] = true;
        }

        while (map.find(head->val) != map.end())
        {
            head = head->next;
        }

        ListNode *cur = head;

        while (cur->next != nullptr)
        {
            if (map.find(cur->next->val) != map.end())
            {
                cur->next = cur->next->next;
            }
            else
            {
                cur = cur->next;
            }
        }

        return head;
    }
};