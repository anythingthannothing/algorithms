#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    int countSeniors(vector<string> &details)
    {
        int result = 0;

        for (string &detail : details)
        {
            int ageTens = detail[11] - '0';
            int ageOnes = detail[12] - '0';

            int age = ageTens * 10 + ageOnes;

            if (age > 60)
            {
                result++;
            }
        }

        return result;
    }
};