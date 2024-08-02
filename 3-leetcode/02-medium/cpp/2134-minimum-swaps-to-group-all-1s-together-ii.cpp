#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    int minSwaps(vector<int> &nums)
    {
        int op1 = minSwapsHelper(nums, 0);
        int op2 = minSwapsHelper(nums, 1);
        return min(op1, op2);
    }

private:
    int minSwapsHelper(vector<int> &data, int val)
    {
        int length = data.size();
        int totalValCount = 0;

        for (int i = 0; i < length; i++)
        {
            if (data[i] == val)
            {
                totalValCount++;
            }
        }

        if (totalValCount == 0 || totalValCount == length)
            return 0;

        int start = 0, end = 0;
        int maxValInWindow = 0, currentValInWindow = 0;

        while (end < totalValCount)
        {
            if (data[end++] == val)
            {
                currentValInWindow++;
            }
        }
        maxValInWindow = max(maxValInWindow, currentValInWindow);

        while (end < length)
        {
            if (data[start++] == val)
                currentValInWindow--;
            if (data[end++] == val)
                currentValInWindow++;
            maxValInWindow = max(maxValInWindow, currentValInWindow);
        }

        return totalValCount - maxValInWindow;
    }
};