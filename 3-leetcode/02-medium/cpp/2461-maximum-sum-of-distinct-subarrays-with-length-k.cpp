#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    long maximumSubarraySum(vector<int> &nums, int k)
    {
        long res = 0;
        int start = 0, end = 0;
        long sum = 0;

        unordered_map<int, int> numToIndex;

        while (end < nums.size())
        {
            int cur = nums[end];
            int lastOccurrence = numToIndex.count(cur) ? numToIndex[cur] : -1;

            while (start <= lastOccurrence || end - start + 1 > k)
            {
                sum -= nums[start];
                start++;
            }

            numToIndex[cur] = end;
            sum += nums[end];

            if (end - start + 1 == k)
            {
                res = max(res, sum);
            }

            end++;
        }

        return res;
    }
};