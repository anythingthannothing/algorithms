#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    int minimumSize(vector<int> &nums, int maxOperations)
    {
        _max = maxOperations;
        int left = 1;
        int right = 0;

        for (auto num : nums)
        {
            right = max(right, num);
        }

        while (left < right)
        {
            int mid = left + (right - left) / 2;

            if (isPossible(mid, nums))
            {
                right = mid;
            }
            else
            {
                left = mid + 1;
            }
        }

        return left;
    }

private:
    int _max;

    bool isPossible(int maxBallsInBag, vector<int> &nums)
    {
        int totalOperations = 0;

        for (int num : nums)
        {
            int operations = ceil(num / (double)maxBallsInBag) - 1;
            totalOperations += operations;

            if (totalOperations > _max)
            {
                return false;
            }
        }

        return true;
    }
};