#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    int getLucky(string s, int k)
    {
        string result = "";
        for (char c : s)
        {
            result += to_string(c - 'a' + 1);
        }

        int sum;

        while (k--)
        {
            sum = 0;

            for (char c : result)
            {
                sum += c - '0';
            }

            result = to_string(sum);
        }

        return sum;
    }
};