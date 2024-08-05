#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    string kthDistinct(vector<string> &arr, int k)
    {
        unordered_map<string, int> map;

        for (string &str : arr)
        {
            map[str]++;
        }

        for (string &str : arr)
        {
            if (map[str] == 1)
            {
                k--;
            }

            if (k == 0)
            {
                return str;
            }
        }

        return "";
    }
};