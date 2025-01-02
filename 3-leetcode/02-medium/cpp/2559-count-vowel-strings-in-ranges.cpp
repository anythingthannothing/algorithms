#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    vector<int> vowelStrings(vector<string> &words,
                             vector<vector<int>> &queries)
    {
        vector<int> ans;
        unordered_set<char> vowels{'a', 'e', 'i', 'o', 'u'};
        vector<int> prefixSum(words.size());
        int sum = 0;

        for (int i = 0; i < words.size(); i++)
        {
            string currentWord = words[i];
            if (vowels.count(currentWord.front()) &&
                vowels.count(currentWord.back()))
            {
                sum++;
            }
            prefixSum[i] = sum;
        }

        for (vector<int> query : queries)
        {

            ans.push_back(prefixSum[query[1]] -
                          (query[0] == 0 ? 0 : prefixSum[query[0] - 1]));
        }

        return ans;
    }
};