#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    int slidingPuzzle(vector<vector<int>> &board)
    {
        int res = 0;
        unordered_set<string> visited;
        vector<string> q;

        string target = "123450";
        string s = "";

        for (int i = 0; i < 2; i++)
        {
            for (int j = 0; j < 3; j++)
            {
                s += to_string(board[i][j]);
            }
        }

        q.push_back(s);

        while (!q.empty())
        {
            vector<string> temp;

            for (string str : q)
            {
                if (str == target)
                {
                    return res;
                }

                visited.insert(str);

                int index = str.find('0');

                if (index >= 3)
                {
                    string cur = str;
                    swap(cur[index], cur[index - 3]);
                    if (visited.find(cur) == visited.end())
                    {
                        temp.push_back(cur);
                    }
                }

                if (index <= 2)
                {
                    string cur = str;
                    swap(cur[index], cur[index + 3]);
                    if (visited.find(cur) == visited.end())
                    {
                        temp.push_back(cur);
                    }
                }

                if (index != 2 && index != 5)
                {
                    string cur = str;
                    swap(cur[index], cur[index + 1]);
                    if (visited.find(cur) == visited.end())
                    {
                        temp.push_back(cur);
                    }
                }

                if (index != 0 && index != 3)
                {
                    string cur = str;
                    swap(cur[index], cur[index - 1]);
                    if (visited.find(cur) == visited.end())
                    {
                        temp.push_back(cur);
                    }
                }
            }

            res++;
            q = temp;
        }

        return -1;
    }
};