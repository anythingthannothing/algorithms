#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    vector<bool> isArraySpecial(vector<int> &nums,
                                vector<vector<int>> &queries)
    {
        vector<bool> ans;
        vector<int> violatingIndices;

        for (int i = 1; i < nums.size(); i++)
        {
            if (nums[i] % 2 == nums[i - 1] % 2)
            {
                violatingIndices.push_back(i);
            }
        }

        for (int i = 0; i < queries.size(); i++)
        {
            vector<int> query = queries[i];
            int start = query[0];
            int end = query[1];

            bool foundViolatingIndex =
                binarySearch(start + 1, end, violatingIndices);

            if (foundViolatingIndex)
            {
                ans.push_back(false);
            }
            else
            {
                ans.push_back(true);
            }
        }

        return ans;
    }

private:
    bool binarySearch(int start, int end, vector<int> &violatingIndices)
    {
        int left = 0;
        int right = violatingIndices.size() - 1;
        while (left <= right)
        {
            int mid = left + (right - left) / 2;
            int violatingIndex = violatingIndices[mid];

            if (violatingIndex < start)
            {
                left = mid + 1;
            }
            else if (violatingIndex > end)
            {
                right = mid - 1;
            }
            else
            {
                return true;
            }
        }

        return false;
    }
};