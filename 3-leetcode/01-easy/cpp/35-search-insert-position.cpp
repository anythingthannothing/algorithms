#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    int searchInsert(vector<int> &nums, int target)
    {
        int leftIndex = 0;
        int rightIndex = nums.size() - 1;

        while (rightIndex > leftIndex)
        {
            int middleIndex = leftIndex + (rightIndex - leftIndex) / 2;
            int value = nums[middleIndex];

            if (value == target)
            {
                return middleIndex;
            }
            else if (value > target)
            {
                rightIndex = middleIndex - 1;
            }
            else
            {
                leftIndex = middleIndex + 1;
            }
        }

        return nums[leftIndex] < target ? leftIndex + 1 : leftIndex;
    }
};
