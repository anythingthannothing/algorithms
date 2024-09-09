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
    vector<vector<int>> spiralMatrix(int m, int n, ListNode *head)
    {
        int i = 0, j = 0, curDir = 0,
            dir[4][2] = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        vector<vector<int>> res(m, vector<int>(n, -1));

        while (head != nullptr)
        {
            res[i][j] = head->val;
            int newi = i + dir[curDir][0], newj = j + dir[curDir][1];

            if (min(newi, newj) < 0 || newi >= m || newj >= n ||
                res[newi][newj] != -1)
            {
                curDir = (curDir + 1) % 4;
            }
            i += dir[curDir][0];
            j += dir[curDir][1];

            head = head->next;
        }

        return res;
    }
};