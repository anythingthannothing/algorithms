#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    vector<string> removeSubfolders(vector<string> &folder)
    {
        vector<string> res;
        unordered_set<string> folderSet(folder.begin(), folder.end());

        for (string &f : folder)
        {
            bool isSubFolder = false;
            string temp = f;

            while (!temp.empty())
            {
                int pos = temp.find_last_of('/');

                if (pos == temp.npos)
                {
                    break;
                }

                temp = temp.substr(0, pos);

                if (folderSet.count(temp))
                {
                    isSubFolder = true;
                    break;
                }
            }

            if (!isSubFolder)
            {
                res.push_back(f);
            }
        }

        return res;
    }
};